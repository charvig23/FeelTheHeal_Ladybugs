const express=require("express");
const router=express.Router();
const Admin = require("../Models/admin");
const Application = require("../Models/Application");

router.post("/donations", async (req, res) => {
    try{
        const {user, name, email, phone, address, detailsOfLoss, dateOfBirth, publicId, url, location, compensationAmount, bankName, accountNumber, typeOfDisaster, dateOfDisaster, checkBox, accountHolderName} = req.body;


        const filledApplication = {user, name, email, phone, address, detailsOfLoss, dateOfBirth, publicId, url, location, compensationAmount, bankName, accountNumber, typeOfDisaster, checkBox, dateOfDisaster, accountHolderName};


        const newApplication = await Application.create(filledApplication);
        const admin = await Admin.findOne({email: "Jm@gmail.com"});

        if (!admin) {
            throw new Error("Admin not found");
        }

        admin.DonApplications.push(newApplication._id);

        res.status(201).json({ message: 'Application sent successfully', application: newApplication });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
