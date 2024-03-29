const mongoose = require("mongoose");
const admin = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const AdminModel = mongoose.model("admin", admin); // 1st argument is name with what we will store the model as, 2nd argument for what schema we are using to build the model

module.exports = AdminModel;