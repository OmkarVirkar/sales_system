exports.checkUserDataValidity = () => {
  loginDataValidity = (reqBody) => {
    let { userName, firstName, lastName, password, userType } = reqBody;
    let message = "";
    let code = 200;
    let errorFound = false;
    if (userName.trim() != "") {
      errorFound = true;
      message = "Username cannot be empty";
    } else if ((firstName.trim() = "")) {
      errorFound = true;
      message = "Firstname cannot be empty";
    } else if (lastName.trim() == "") {
      errorFound = true;
      message = "Lastname cannot be empty";
    } else if (password.trim()) {
      errorFound = true;
      message = "Password cannot be empty";
    } else if (userType != null || userType != undefined) {
      errorFound = true;
      message = "Please select a valid user type";
    } else {
      errorFound = false;
      message = "Data is Valid";
    }

    let finalReturnJson = `{
        "code":${code},
        "errorFound":${errorFound}
        "message":${message};
    }`;

    return JSON.parse(finalReturnJson);
  };
};
