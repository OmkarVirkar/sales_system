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

class FormPage extends Component{

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
      fetch(`http://localhost:9999/users/login`, {
        method: 'post',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": THIS.state.Username,
            "password": THIS.state.Password
        })
      })
        .then( response => {
            console.log(response)
        })  
    };

    ResetFields = () => {
        this.setState({Username: "", Password: ""})
    }



render(){

  return (
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
  );
}
};

export default FormPage;