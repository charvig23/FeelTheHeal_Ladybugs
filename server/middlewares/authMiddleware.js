// authMiddleware.js
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
// const cookieExtractor = require('passport-jwt').ExtractJwt.fromCookie;
const User = require('../Models/User.js'); 

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
};

const opts = {};
opts.jwtFromRequest = cookieExtractor; 
opts.secretOrKey = process.env.pass_word; 

passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
        try {
            const user = await User.findById(jwtPayload.identifier); 
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    })
);

const authMiddleware = passport.authenticate('jwt', { session: false });
module.exports = authMiddleware;

