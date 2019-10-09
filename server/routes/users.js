var path = require('path')
var express = require('express');
var router = express.Router();
const loginObj = path.join(__dirname+"/server/scripts/loginOperations");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res){
  // Step 1: Get the userName and the password
  let userName = req.body.username;
  let password = req.body.password; 

  // Step 2: Check if the user exists
  loginObj.checkUser(userName, password);
  console.log(loginObj)
  // res.send(req.body.username);
});

module.exports = router;
