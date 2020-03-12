import React from 'react';
import { Component } from 'react';
import PersistentDrawerLeft from "./components/NavBar";
// import SideBar from "./components/Sidebar";

export default class MainPage extends Component{

    constructor(){
        super();
        this.state = {
            showSidebar : false
        }
    }

    showNavBar = () => {
        this.setState({
            showSidebar: true
        })
    }

    goToLoginPage = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <PersistentDrawerLeft logout={this.goToLoginPage}/>  
            </div>
        )
    }
}