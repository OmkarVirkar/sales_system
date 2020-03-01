export let checkUserSettings = (user, pass) => {
    let settings = {
        type: "POST",
        url: "http://localhost:9999/users/login",
        data: {
            "username": user,
            "password": pass
        },
        crossDomain: true,
    };

    return settings;
}


export let logoutUserSetting = (user, pass) => {
    let settings = {
        type: "POST",
        url: "http://localhost:9999/users/login",
        data: {
            "username": user,
            "password": pass
        },
        crossDomain: true,
    };

    return settings;
}