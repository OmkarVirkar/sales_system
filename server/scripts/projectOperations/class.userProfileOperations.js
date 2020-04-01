const connection = require("../../DBConnect").ConnObj;
// let userSession = require("../../sessionManager").sess;

class UserProfileOperations{
    constructor(){

    }

    getUserDetails(){
        console.log("Hello");
        return new Promise((resolve, reject) => {
            var conn = connection.establishConnection();
            var qry = {
                "operationType": "getUserDetails",
                "userName": "admin",
                "password": "admin"
            }
            var userQuery = this.createQuery(qry);

            connection.fireQuery( conn, userQuery )
            .then(message => {console.log(message); return resolve(message);})
            .catch((err) => {console.log(`Error while fetching the user`)})
        });
    }

    createQuery( operationObj ){
        let operationType = operationObj.operationType;

        switch( operationType ){
            
            case "getUserDetails":
                let username = operationObj.userName; 
                let password = operationObj.password;
                let Query = "SELECT * FROM `user_profiles` WHERE `username` = '"+username+"' AND `password` = '"+password+"'";
            return Query;
        }
    }
}

const userProfileObj = new UserProfileOperations();

module.exports = {userProfileObj};