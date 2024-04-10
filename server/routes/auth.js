const express=require("express");
const router=express.Router();
const User = require("../Models/User");
const Admin = require("../Models/admin");
const bcrypt=require("bcrypt");
const {getToken,verifyToken}=require("../utils/helper");
// <--PATIENTS LOG IN SIGNUP ROUTES-->

router.post("/register/user", async (req, res) => {

    const {email, password, Name} = req.body;

    const user = await User.findOne({email: email});
    if(user) {

        return res
        .status(403)
        .json({error: "A user with this email already exists"});
    }


    const hashedPwd= await bcrypt.hash(password, 10); 
    const newUserData = {email, password: hashedPwd, Name};
    const newUser = await User.create(newUserData);

   
    const token = await getToken(email, newUser); 
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
    return res.status(200).json({userToReturn, msg: "User registered successfully"});
});


router.post("/login/user", async (req, res) => {

    const {email, password} = req.body;
    try{
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(403).json({msg: "Invalid credentials"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({msg: "Invalid credentials"});
        }
        const token = await getToken(user.email, user);
        const userToReturn = {...user.toJSON(), token};
        delete userToReturn.password;
        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            withCredentials: true,
            httpOnly: false,
          });
        res.status(200).json({userToReturn, msg: "Login successful",token: token});
        // console.log("successfully logged in :)");
    } catch(error){
        res.status(403).json({err:"Problem while logging in:("});
    }
});


// <--ADMIN LOG IN SIGNUP ROUTES-->

router.post("/register/admin", async (req, res) => {

    const {email, password, Name} = req.body;

    const user = await Admin.findOne({email: email});
    if(user) {

        return res
        .status(403)
        .json({error: "A user with this email already exists"});
    }


    const hashedPwd= await bcrypt.hash(password, 10); 
    const newUserData = {email, password: hashedPwd, Name};
    const newUser = await Admin.create(newUserData);

   
    const token = await getToken(email, newUser); 
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
    res.status(200).json(userToReturn);
});


router.post("/login/admin", async (req, res) => {

    const {email, password} = req.body;
    try{

        const user = await Admin.findOne({email: email});
        if (!user) {
            return res.status(403).json({err: "Invalid credentials"});
        }

        
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({err: "Invalid credentials"});
        }
        const token = await getToken(user.email, user);
        const userToReturn = {...user.toJSON(), token};
        delete userToReturn.password;
        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            withCredentials: true,
            httpOnly: false,
          });
        res.status(200).json({userToReturn, msg: "Login successful", token: token});
        // console.log("successfully logged in :)");
    } catch(error){
        res.status(403).json({err:"Problem while logging in:("});
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
      const admin = await Admin.findOne({ email: email });
  
      if (!user && !admin) {
        return res.status(403).json({ msg: "Invalid credentials" });
      }
  
      let loggedInUser = null;
      let role = null;
  
      if (user) {
        if (!(await bcrypt.compare(password, user.password))) {
          return res.status(403).json({ msg: "Invalid credentials" });
        }
        loggedInUser = user;
        role = "user";
      }
  
      if (admin) {
        if (!( bcrypt.compare(password, admin.password))) {
          return res.status(403).json({ msg: "Invalid credentials" });
        }
        loggedInUser = admin;
        role = "admin";
      }
  
      const token = await getToken(loggedInUser);
      console.log(token);
      const decodedToken = verifyToken(token);
      console.log(decodedToken.role);
      res.cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        withCredentials: true,
        httpOnly: true,
        SameSite: 'None',
      });
      console.log(token);
  
      return res.status(200).json({ role: decodedToken.role, token, msg: "Login successful" });
    } catch (error) {
      return res.status(500).json({ msg: "Internal server error" });
    }
  });
  

router.get('/logout', (req, res) => {
  res.clearCookie('token').json({ message: 'Logout successful' });
  });

//   router.post('/verify-token', authMiddleware, async (req, res) => {
//     try {
//       if (!req.user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       if (req.user.isAdmin) {
//         // Here you can return any data you want for admin access
//         return res.status(200).json({ valid: true, isAdmin: true });
//       }
  
//       return res.status(403).json({ message: 'Access forbidden' }); // Non-admin users are forbidden
//     } catch (error) {
//       res.status(401).json({ valid: false, message: 'Invalid token' });
//     }
//   });

module.exports = router;