import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./media/css/login.css";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import Zoom from '@material-ui/core/Zoom';
import $ from 'jquery';
import {checkUserSettings} from "../../models/media/js/externalRequestManager";



export default class LoginPage extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
        Username: "",
        Password: ""
      }
    }

    changeUsername = (event) => {
        this.setState({Username: event.target.value});
    }

    changePassword = (event) => {
        this.setState({Password: event.target.value})
    }

    checkUser = () => {
        let THIS = this;
        let user = this.state.Username;
        let pass = this.state.Password;
        let settings = checkUserSettings(user, pass);

        $.ajax(settings).done(function(response){
            if(response.length > 0){
                THIS.changeWindow(response[0].login_type);
            }
        });
    
    };

    changeWindow = (profile_type) => {
        console.log(profile_type)
        if(profile_type == 2){
            this.props.history.push("MainPage");
        }
        
    }

    ResetFields = () => {
        this.setState({Username: "", Password: ""})
    }



render(){

  return (
    <div id="login_page_body" >
    <Zoom in={true} style={{ transitionDelay: '200ms'}}>
    <div className="login_div shadow mx-auto">
        <div className="text-center">
            <h2>Login Page</h2>
        </div>
        <div className="text-center">
            <TextField
                id="outlined-name"
                label="Enter Username"
                className="Login_field text-center"
                placeholder = "Username"
                margin="normal"
                variant="outlined"
                value = {this.state.Username}
                onChange={this.changeUsername}
            />

            <TextField
                id="outlined-name"
                label="Enter Password"
                className="Login_field text-center"
                placeholder = "Password"
                margin="normal"
                type="password"
                value={this.state.Password}
                onChange={this.changePassword}
                variant="outlined"
            />
        </div>

        <div className="d-inline-block text-center sign_in_section">
            <Button onClick={this.checkUser} variant="contained" color="primary" className="mr-1">
                Sign In
            </Button>
            <Button onClick={this.ResetFields} variant="contained" color="secondary" className="ml-1">
                Cancel
            </Button>
        </div>
    </div>
    </Zoom>
    </div>
  );
}
};