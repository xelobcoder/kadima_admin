
const mongoose = require("mongoose");
const admin = require ("../admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {ACCESS_TOKEN,REFRESH_TOKEN} = require("../../config/env");

module.exports = {
    salts: 10,
    hash: "jellyTimeKadimaFunPopJenifferMyQueenForgaveToxic",
  hashed: [],
    encryptPassword: function(req,res) {
        const {password} = req.body;
        return bcrypt.hashSync(password, this.salts); 
    },
    accessToken: function(request,response) {
      let accesstoken = jwt.sign({
        username: request.body.username,
      }, ACCESS_TOKEN, { expiresIn: "30m" });
      let refreshtoken = jwt.sign({
        username: request.body.username}
        , REFRESH_TOKEN, { expiresIn: "24h" });
      response.status(200).json({accesstoken: accesstoken, refreshtoken: refreshtoken});
    },
   comparePassword: function(password,hashed) {
    return bcrypt.compare(password,hashed) 
   },
   findPassword: function(req,res) {
     const { password, username, question, answer } = req.body;
     admin.find({ username }, (err, data) => {
       if (err) throw err;
       const { dbusername, dbpassword, secretQuestion, answerQuestion }
         = data[0];
       const isUsernameValid = dbusername === username;
       const issecretQuestionValid = secretQuestion === question;
       const isAnswerValid = answer === answerQuestion;
       console.log(isAnswerValid,issecretQuestionValid,isUsernameValid);
       if(isUsernameValid && issecretQuestionValid && isAnswerValid) {
         this.comparePassword(password, dbpassword)
           .then((t) => {
             if (t) {
               this.accessToken(req, res);
             } else { res.send({ credential: "wrong password" }) };
           }).catch((err) => { throw err });
       } else {
         res.send({
           credential: "wrong username or secret question or answer",
           usernameValid: isUsernameValid,
           secretValid: issecretQuestionValid,
            answerValid: isAnswerValid,
         });
        }
     })

  }

}


