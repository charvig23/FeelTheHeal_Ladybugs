const mongoose = require("mongoose");
const User = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    Occupation: {
        type: String,
        default: "Patient",
    },
    Appointments: {
        type: String,
        default: "",
    },
    //Applied and donated donations--> as objects
});

const UserModel = mongoose.model("User", User); // 1st argument is name with what we will store the model as, 2nd argument for what schema we are using to build the model

module.exports = UserModel;