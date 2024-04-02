const express = require('express');
const app = express();
const User = require("../server/Models/User.js");
const Admin = require("../server/Models/admin.js");
const passport=require("passport");
const cors = require("cors");
const JwtStrategy = require('passport-jwt').Strategy, 
  ExtractJwt = require('passport-jwt').ExtractJwt;
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "server/config/config.env"});
}


// using middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// import routes here

const authRoutes = require("./routes/auth.js");
const applicationRoutes = require("./routes/application.js");
const applyRoutes = require("./routes/applied.js");

//use routes here

app.use("/auth", authRoutes);
app.use("/api",applicationRoutes);
app.use("/apply", applyRoutes);

module.exports = app;

// setup for passport-jwt
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.pass_word;//it is secret key that helps in encryption and decryption
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

