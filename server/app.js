const express = require('express');
const app = express();
const User = require("../server/Models/User.js");
const passport=require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const multer = require("multer");
const errorHandler = require("./middlewares/errorHandle.js");
// const upload = multer();
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "server/config/config.env"});
}


// using middlewares
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);
// app.use(upload.any());
app.use(passport.initialize());
app.use(cookieParser());

// import routes here

const authRoutes = require("./routes/auth.js");
const applicationRoutes = require("./routes/application.js");
const authMiddleware = require('./middlewares/authMiddleware.js');
const pagesRoutes = require("./routes/pages.js");
//use routes here

app.use("/auth", authRoutes);
app.use("/api",applicationRoutes);
app.use("/pages",pagesRoutes);

module.exports = app;

// setup for passport-jwt
app.use(authMiddleware);

