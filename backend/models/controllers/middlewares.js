
const mongoose = require("mongoose");
const admin = require ("../admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../../config/env")
module.exports = {
    salts: 10,
    hash: "jellyTimeKadimaFunPopJenifferMyQueenForgaveToxic",
  hashed: [],
    encryptPassword: function(req,res) {
        const {password} = req.body;
        return bcrypt.hashSync(password, this.salts); 
    },
    accessToken: function(request,response) {
      let token = jwt.sign({
        username: request.body.username,
      }, this.hash, { expiresIn: 30000 });
      request.headers.authorization = token;
       response.json({token: token});
    },
  refreshToken: async function () {
    jwt.sign({
      username: request.body.username}
      ,env.accessToken,{expiresIn: 30000});
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


