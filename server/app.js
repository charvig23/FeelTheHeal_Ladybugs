const express = require('express');
const app = express();

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "server/config/config.env"});
}

// using middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// import routes here


//use routes here


module.exports = app;