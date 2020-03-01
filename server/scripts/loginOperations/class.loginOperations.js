const connection = require("../../DBConnect.js").connection;

class loginOperations {
    constructor(){
        this.userName = "";
        this.password  ="";
    }

    checkUser(userName, password){
        return new Promise((resolve, reject) => {
            // Step 1: Set the username and passowrd in the constructor
            this.userName = userName;
            this.password = password;
                    
            // Step 2: Check if the userExists
            var qry = {
                "operationType": "CheckUser",
                "userName": this.userName,
                "password": this.password
            
            }
            let userQuery = this.createCheckQuery(qry)
            // console.log(userQuery);
            this.fireQuery( userQuery )
            .then(message => {console.log(message); return resolve(message);})
            .catch((err) => {console.log(`Error while fetching the user`)})
        });
        
        
    }

    fireQuery(userQuery){
        return new Promise(( resolve, reject ) => {
            connection.query( userQuery , function( err, result, fields){
                if(err){
                    console.log(`Error: ${err}`)
                    return reject(err);
                }
                
                /*
                    If the query retured a user then the length will be more than 0;
                */
                if(result.length > 0){
                    let userData  = JSON.stringify(result, undefined, 2);
                    console.log(userData);
                    return  resolve(userData);
                }else{
                    return  resolve(false);
                }
        
        });
        })
            
    }
    createCheckQuery( operationObj ){
        let operationType = operationObj.operationType;

        switch( operationType ){
            
            case "CheckUser": 
                let Query = "SELECT * FROM `user_profiles` WHERE `username` = '"+operationObj.userName+"' AND `password` = '"+operationObj.password+"'";
            return Query;
        }
    }
}

const loginObj = new loginOperations();

module.exports = {loginObj};