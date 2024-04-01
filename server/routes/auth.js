const express=require("express");
const router=express.Router();
const User = require("../Models/User");
const Admin = require("../Models/admin");
const bcrypt=require("bcrypt");
const {getToken}=require("../utils/helper");

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
    return res.status(200).json({userToReturn, msg: "User registered successfully"});
});


router.post("/login/user", async (req, res) => {

    const {email, password} = req.body;
    try{

        const user = await User.findOne({email: email});
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
        return res.status(200).json({userToReturn, msg: "Login successful"});
        console.log("successfully logged in :)");
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
    const newUserData = {email, password: hashedPwd, firstName, lastName};
    const newUser = await Admin.create(newUserData);

   
    const token = await getToken(email, newUser); 
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
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
        return res.status(200).json(userToReturn);
        console.log("successfully logged in :)");
    } catch(error){
        res.status(403).json({err:"Problem while logging in:("});
    }
});


module.exports = router;