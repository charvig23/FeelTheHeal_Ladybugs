const jwt = require("jsonwebtoken");
const Admin = require("../Models/admin.js");

const getToken = async (user) => {
  try {
    const isAdmin = await Admin.exists({ _id: user._id });
    const role = isAdmin ? 'admin' : 'user';
    const token = jwt.sign({ identifier: user._id, role: role }, process.env.pass_word);
    console.log(token);
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const verifyToken = (token) => {
    try {
      const decodedToken = jwt.verify(token, process.env.pass_word);
      console.log(decodedToken);
      console.log(decodedToken.role); 
      return decodedToken;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

module.exports = {getToken, verifyToken};

