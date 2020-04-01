var path = require('path')
var express = require('express');
var router = express.Router();
const userProfObj = require("../scripts/projectOperations/class.userProfileOperations").userProfileObj;

router.post('/', function(req, res, next) {
    // console.log(req);
    let opertationType = req.body.operationType;
   

    if(opertationType == "getUserDetails"){
        userProfObj.getUserDetails()
        .then(  result => {
            console.log("final "+result);
            result = JSON.parse(result);      
            res.send(result);}
        );
    }
});

module.exports = router;