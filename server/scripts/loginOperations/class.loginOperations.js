const connection = require("../../DBConnect.js").ConnObj;

class loginOperations {
  constructor() {
    this.userName = "";
    this.password = "";
  }

  checkUser(userName, password) {
    return new Promise((resolve, reject) => {
      var conn = connection.establishConnection();
      // Step 1: Set the username and passowrd in the constructor
      this.userName = userName;
      this.password = password;

      // Step 2: Check if the userExists
      var qry = {
        operationType: "CheckUser",
        userName: this.userName,
        password: this.password,
      };
      let userQuery = this.createCheckQuery(qry);
      // console.log(userQuery);
      connection
        .fireQuery(conn, userQuery)
        .then((message) => {
          console.log(message);
          return resolve(message);
        })
        .catch((err) => {
          console.log(`Error while fetching the user`);
          return reject(err);
        });
    });
  }

  createCheckQuery(operationObj) {
    let operationType = operationObj.operationType;

    switch (operationType) {
      case "CheckUser":
        let Query =
          "SELECT * FROM `user_profiles` WHERE `username` = '" +
          operationObj.userName +
          "' AND `password` = '" +
          operationObj.password +
          "'";
        return Query;
    }
  }
}

const loginObj = new loginOperations();

module.exports = { loginObj };
