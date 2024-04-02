const mongoose = require("mongoose");
const admin = new mongoose.Schema({
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
    DocApplications: [{
        type: mongoose.Types.ObjectId,
        ref: "doc",//model has to be made for doc applications....this one is temporary.
    }],
    DonApplications: [{
        type: mongoose.Types.ObjectId,
        ref: "Application",
    }],
});

const AdminModel = mongoose.model("admin", admin); // 1st argument is name with what we will store the model as, 2nd argument for what schema we are using to build the model

module.exports = AdminModel;