var path = require("path");
var express = require("express");
var router = express.Router();
const loginObj = require("../scripts/loginOperations/class.loginOperations.js")
  .loginObj;
let userSession = require("../sessionManager.js").app;
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function (req, res) {
  // Step 1: Get the userName and the password
  let opertationType = req.body.operationType;
  let userName = req.body.username;
  let password = req.body.password;
  // Step 2: Check if the user exists

  if (opertationType == "Login") {
    loginObj
      .checkUser(userName, password)
      .then((result) => {
        console.log("final " + result);
        result = JSON.parse(result);

        if (result.length > 0) {
          req.session = [...result];
        } else {
          userSession = [];
        }

        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  } else if (opertationType == "Logout") {
    userSession = [];
    res.send(true);
  }
});

module.exports = router;
