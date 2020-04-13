var path = require("path");
var express = require("express");
var router = express.Router();
const userProfObj = require("../scripts/projectOperations/class.userProfileOperations.js")
  .userProfileObj;
// let validators = require("../scripts/ValidityCheckers/validators.js");

router.post("/", function (req, res, next) {
  // console.log(req);
  let opertationType = req.body.operationType;
  console.log(req.session);
  if (opertationType == "getUserDetails") {
    userProfObj
      .getUserDetails()
      .then((result) => {
        result = JSON.parse(result);
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  } else if (opertationType == "updateUserDetails") {
    userProfObj
      .updateUserProfileDetails(req.body)
      .then((message) => {
        console.log(message);
        res.send(message);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        res.send(err);
      });
  }
});

module.exports = router;
