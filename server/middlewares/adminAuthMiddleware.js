const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
const Admin = require('../Models/admin.js'); 

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
            const admin = await Admin.findById(jwtPayload.identifier);
            if (admin) {
                return done(null, admin);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    })
);

const adminAuthMiddleware = passport.authenticate('jwt', { session: false });

module.exports = adminAuthMiddleware;
