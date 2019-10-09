const path = require('path');
const connection = path.join(__dirname+"/server/scripts/loginOperations");

class loginOperations {
    constructor(){
        this.userName = "";
        this.password  ="";
    }

    checkUser(userName, password){

        // Step 1: Set the username and passowrd in the constructor
        this.userName = userName;
        this.password = password;

        // Step 2: Check if the userExists
        const query = "select * from `login_table` where 1";
    }
}

const loginObj = new loginOperations();

module.exports = loginObj;