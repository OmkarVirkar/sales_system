const connection = require("../../DBConnect.js").ConnObj;
let userSession = require("../../sessionManager").sess;

class UserProfileOperations {
  constructor() {
    this.tableName = "user_profiles";
  }

  getUserDetails() {
    return new Promise((resolve, reject) => {
      var qry = {
        operationType: "getUserDetails",
        userName: "admin",
        password: "admin",
      };
      // console.log(conn);
      var userQuery = this.createQuery(qry);

      connection
        .fireQuery(connection.conn, userQuery)
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

  updateUserProfileDetails(userDetails) {
    return new Promise((resolve, reject) => {
      let {
        userName,
        firstName,
        lastName,
        password,
        userType,
        indexId,
      } = userDetails;
      var qry = {
        operationType: "UpdateUserDetails",
        userName,
        firstName,
        lastName,
        password,
        userType,
        indexId,
      };

      var userQuery = this.createQuery(qry);
      console.log(connection.conn);
      connection
        .fireQuery(connection.conn, userQuery)
        .then((message) => {
          return resolve(message);
        })
        .catch((err) => {
          console.log(`Error while updating user details`);
          return reject(err);
        });
    });
  }

  createQuery(operationObj) {
    let operationType = operationObj.operationType;

    switch (operationType) {
      case "getUserDetails":
        var username = operationObj.userName;
        var password = operationObj.password;
        var Query =
          "SELECT * FROM `user_profiles` WHERE `username` = '" +
          username +
          "' AND `password` = '" +
          password +
          "'";
        return Query;

      case "UpdateUserDetails":
        var userName = operationObj.userName;
        var password = operationObj.password;
        var userType = operationObj.userType;
        var firstName = operationObj.firstName;
        var lastName = operationObj.lastName;
        var indexId = operationObj.indexId;

        var Query =
          "UPDATE `user_profiles` SET `username` = '" +
          userName +
          "', `password` = '" +
          password +
          "', `profile_type` = " +
          userType +
          ", `first_name` = '" +
          firstName +
          "', `last_name` = '" +
          lastName +
          "' WHERE `index` = " +
          indexId +
          "";
        return Query;
    }
  }
}

const userProfileObj = new UserProfileOperations();

module.exports = { userProfileObj };
