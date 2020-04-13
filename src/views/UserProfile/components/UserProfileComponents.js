import React, { Fragment } from "react";
import { render } from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Card from "@material-ui/core/Card";
import {
  PaperCardStyles,
  textInputStyles,
  materialButtonStyles,
} from "../../../media/js/cssSupport";
import {
  getUserProfileData,
  updateUserDetailsRequest,
} from "../../../models/media/js/externalRequestManager";
import { Component } from "react";
import { UserProfiles } from "../../../models/media/js/constants";
import $ from "jquery";
import _ from "lodash";

let getUserTypeName = (userType) => {
  return userType == UserProfiles.ADMIN ? "Admin" : "User";
};

export const OverViewHeader = () => {
  return (
    <div>
      <span className="span_header">OVERVIEW</span>
      <h3 className="dark_blue_header">User profile</h3>
    </div>
  );
};

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      userType: "",
    };

    let previousState = [];
    let indexId = 0;
  }

  componentWillMount = () => {
    var settings = getUserProfileData();
    let THIS = this;
    $.ajax(settings).done((response) => {
      console.log(response);
      THIS.setState({
        firstName: response[0].first_name,
        lastName: response[0].last_name,
        userName: response[0].username,
        password: response[0].password,
        userType: response[0].profile_type,
      });

      THIS.previousState = _.cloneDeep(THIS.state);
      THIS.indexId = response[0].index;
      console.log(this.previousState);
    });
  };

  updateUserUserDetailsInState = (event) => {
    console.log(event.target.name);
    let stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  resetDetails = () => {
    let THIS = this;
    this.setState({
      ...THIS.previousState,
    });
  };

  saveUserDetailsToDB = () => {
    let settings = updateUserDetailsRequest(
      this.indexId,
      this.state.userName,
      this.state.firstName,
      this.state.lastName,
      this.state.password,
      this.state.userType
    );

    $.ajax(settings).done((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="row">
        <ProfileCard
          userName={this.state.userName}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          userType={this.state.userType}
        />
        <EditProfileDetailsCard
          getUpdatedContent={this.updateUserUserDetailsInState}
          resetState={this.resetDetails}
          saveUserDetails={this.saveUserDetailsToDB}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          userType={this.state.userType}
          userName={this.state.userName}
          password={this.state.password}
        />
      </div>
    );
  }
}

export const ProfileCard = (props) => {
  let CardStyles = PaperCardStyles();
  let firstCharacter = props.firstName.substring(0, 1).toUpperCase();
  let userType = getUserTypeName(props.userType);

  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <div className="col-md-5 col-xs-12 p-2">
        <Card className={CardStyles.root}>
          <div className="p-3">
            <div
              id="user_profile_img_icon"
              className="text-center rounded-circle"
            >
              {firstCharacter}
            </div>
            <div id="user_name_div" className="text-center dark_blue_header">
              <h4 className="mt-3">
                {props.firstName} {props.lastName}
              </h4>
              <h6>{userType}</h6>
            </div>
            <hr />
            <div>
              <h5 className="field_name">
                Username: <span className="field_value">{props.userName}</span>
              </h5>
              <h5 className="field_name">
                First Name:{" "}
                <span className="field_value">{props.firstName}</span>
              </h5>
              <h5 className="field_name">
                Last Name: <span className="field_value">{props.lastName}</span>
              </h5>
              <h5 className="field_name">
                User Type: <span className="field_value">{userType}</span>
              </h5>
            </div>
          </div>
        </Card>
      </div>
    </Grow>
  );
};

export const EditProfileDetailsCard = (props) => {
  /* constructor(props){
        super(props);

        this.state = {
            username: this.props.userName,
            password: this.props.password,
            first_name: this.props.firstName,
            last_name:this.props.lastName,
            user_type: this.props.userType
        }
    } */

  const textClasses = textInputStyles();
  const materialButtonClasses = materialButtonStyles();
  let CardStyles = PaperCardStyles();

  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <div className="col-md-7 col-xs-12 p-2">
        <Card className={CardStyles.root}>
          <div className="p-1">
            <div className="dark_blue_header pl-2">
              <h5 className="mt-2">Account Details</h5>
            </div>
            <hr className="my-0"></hr>
            <div className="mt-2">
              <form className={textClasses.root} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  name="userName"
                  label="Username"
                  value={props.userName}
                  onChange={(event) => {
                    props.getUpdatedContent(event);
                  }}
                />
                <br></br>
                <TextField
                  id="standard-basic"
                  name="firstName"
                  label="First Name"
                  value={props.firstName}
                  onChange={(event) => {
                    props.getUpdatedContent(event);
                  }}
                />
                <br></br>
                <TextField
                  id="standard-basic"
                  name="lastName"
                  label="Last Name"
                  value={props.lastName}
                  onChange={(event) => {
                    props.getUpdatedContent(event);
                  }}
                />
                <br></br>
                <TextField
                  id="standard-basic"
                  name="password"
                  label="Password"
                  type="password"
                  value={props.password}
                  onChange={(event) => {
                    props.getUpdatedContent(event);
                  }}
                />
                <br></br>
                <FormControl className={textClasses.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    User Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="userType"
                    value={props.userType}
                    onChange={(event) => {
                      props.getUpdatedContent(event);
                    }}
                  >
                    <MenuItem value={UserProfiles.ADMIN}>Admin</MenuItem>
                    <MenuItem value={UserProfiles.USER}>User</MenuItem>
                  </Select>
                </FormControl>
              </form>
              <div className={materialButtonClasses.root}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.saveUserDetails}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={props.resetState}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Grow>
  );
};
