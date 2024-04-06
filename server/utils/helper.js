const jwt = require("jsonwebtoken");

const getToken = async (email, user,next) => {
    const token = jwt.sign({ identifier : user._id}, process.env.pass_word);
    return token;
};
module.exports = getToken;