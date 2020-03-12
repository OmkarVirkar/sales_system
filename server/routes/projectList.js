var path = require('path')
var express = require('express');
var projectOperationsObj = require("../scripts/projectOperations/class.projectOperations.js").projectOperationsObj;
var router = express.Router();

let userSession = require("../sessionManager").sess;
/* GET users listing. */


router.post('/projectList', function(req, res){
    projectOperationsObj.getProjectList()
        .then(result => {
            res.send(result)
        });
});

module.exports  = router;