const express=require("express");
const router=express.Router();
const Doc = require("../Models/doc");
const Patient = require("../Models/patient");
const Admin = require("../Models/admin");
const bcrypt=require("bcrypt");
const {getToken}=require("../utils/helper");

// <--ADMIN LOG IN SIGNUP ROUTES-->

router.post("/register/doc", async (req, res) => {

    const {email, password, firstName, lastName} = req.body;

    const user = await Doc.findOne({email: email});
    if(user) {

        return res
        .status(403)
        .json({error: "A user with this email already exists"});
    }


    const hashedPwd= await bcrypt.hash(password, 10); 
    const newUserData = {email, password: hashedPwd, firstName, lastName};
    const newUser = await Doc.create(newUserData);

   
    const token = await getToken(email, newUser); 
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});


router.post("/login/doc", async (req, res) => {

    const {email, password} = req.body;
    try{

        const user = await Doc.findOne({email: email});
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


// <--PATIENTS LOG IN SIGNUP ROUTES-->

router.post("/register/patient", async (req, res) => {

    const {email, password, firstName, lastName} = req.body;

    const user = await Patient.findOne({email: email});
    if(user) {

        return res
        .status(403)
        .json({error: "A user with this email already exists"});
    }


    const hashedPwd= await bcrypt.hash(password, 10); 
    const newUserData = {email, password: hashedPwd, firstName, lastName};
    const newUser = await Patient.create(newUserData);

   
    const token = await getToken(email, newUser); 
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});


router.post("/login/patient", async (req, res) => {

    const {email, password} = req.body;
    try{

        const user = await Patient.findOne({email: email});
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


// <--ADMIN LOG IN SIGNUP ROUTES-->

router.post("/register/admin", async (req, res) => {

    const {email, password, firstName, lastName} = req.body;

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