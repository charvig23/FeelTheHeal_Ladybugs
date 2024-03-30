const mongoose = require("mongoose");
const Doc = new mongoose.Schema({
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
    Occupation: {
        type: String,
        default: "",
    },
    Appointments: {
        type: String,
        default:"",
    },
});

const DocModel = mongoose.model("Doc", Doc); // 1st argument is name with what we will store the model as, 2nd argument for what schema we are using to build the model

module.exports = DocModel;