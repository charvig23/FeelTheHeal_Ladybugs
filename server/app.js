const express = require('express');
const app = express();
const Doc = require("../server/Models/doc.js");
const Patient = require("../server/Models/patient.js");
const Admin = require("../server/Models/admin.js");
const passport=require("passport");
const JwtStrategy = require('passport-jwt').Strategy, 
  ExtractJwt = require('passport-jwt').ExtractJwt;
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "server/config/config.env"});
}


// using middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// import routes here

const authRoutes = require("./routes/auth.js");

//use routes here

app.use("/auth", authRoutes);

module.exports = app;

// setup for passport-jwt
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.pass_word;//it is secret key that helps in encryption and decryption
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    let userCollection;
    switch(jwt_payload.type) {
        case 'doc':
            userCollection = Doc;
            break;
        case 'patient':
            userCollection = Patient;
            break;
        case 'admin':
            userCollection = Admin;
            break;
        default:
            return done(null, false); // Invalid user type
    }
    userCollection.findOne({id: jwt_payload.sub}, function(err, user) {
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

