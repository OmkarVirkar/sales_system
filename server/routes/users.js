var path = require('path')
var express = require('express');
var router = express.Router();
const loginObj = require("../scripts/loginOperations/class.loginOperations.js").loginObj;
let userSession = require("../sessionManager.js").sess;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res){
  // Step 1: Get the userName and the password
  let userName = req.body.username;
  let password = req.body.password; 
  // Step 2: Check if the user exists
  loginObj.checkUser(userName, password)
    .then(  result => {
      console.log("final "+result);
      result = JSON.parse(result);

      if(result.length > 0 ){
        userSession = result;
      }else{
        userSession = [];
      }

      res.send(result);}
    );

});

module.exports = router;
