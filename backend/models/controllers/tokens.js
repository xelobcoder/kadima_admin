const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { ACCESS_TOKEN, REFRESH_TOKEN } = require("../../config/env");

const generateAccessToken = (user) => { 
    return jwt.sign(user, ACCESS_TOKEN, { expiresIn: "30m" });
}

const generateRefreshToken = (user) => {
    return jwt.sign(user, REFRESH_TOKEN, { expiresIn: "24h" });
}

const verifyRefreshToken = (token) => {
    return jwt.verify(token, REFRESH_TOKEN);
}

const getRefreshtoken_request = (req) => {
 const { refreshtoken } = req.body; return refreshtoken; 
}

const comparePassword = async (password, hashed) => { 
  return await bcrypt.compare(password, hashed);
}

const hashpassword = async (password) => { 
  return await bcrypt.hash(password, 10);
}

const getRefreshToken_db = async (user,model) => {
 await model.find({ user }, (err, d) => { 
  if (err) throw err;
  const { refreshtoken } = d[0];
  return refreshtoken;
 }); 
}


module.exports = {
 getRefreshToken_db,getRefreshToken_db
 ,generateAccessToken, generateRefreshToken,
 verifyRefreshToken, getRefreshtoken_request,
 hashpassword,comparePassword
};

