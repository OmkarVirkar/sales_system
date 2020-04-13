import {
  loginOperationPath,
  projectOperationPath,
  userDetailsPath,
} from "../../../models/media/js/pathsConstants";

export let checkUserSettings = (user, pass) => {
  let settings = {
    type: "POST",
    url: loginOperationPath,
    data: {
      operationType: "Login",
      username: user,
      password: pass,
    },
    crossDomain: true,
  };

  return settings;
};

export let logoutUserSetting = () => {
  let settings = {
    type: "POST",
    url: loginOperationPath,
    data: {
      operationType: "Logout",
    },
    crossDomain: true,
  };

  return settings;
};

export let getProjectListSetting = () => {
  let settings = {
    type: "POST",
    url: projectOperationPath,
    data: {
      operationType: "Logout",
    },
    crossDomain: true,
  };

  return settings;
};

export let getUserProfileData = () => {
  let settings = {
    type: "POST",
    url: userDetailsPath,
    data: {
      operationType: "getUserDetails",
    },
    crossDomain: true,
  };

  return settings;
};

export const updateUserDetailsRequest = (
  indexId,
  userName,
  firstName,
  lastName,
  password,
  userType
) => {
  let settings = {
    type: "POST",
    url: userDetailsPath,
    data: {
      operationType: "updateUserDetails",
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      password: password,
      userType: userType,
      indexId: indexId,
    },
    crossDomain: true,
  };

  return settings;
};
