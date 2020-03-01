import React from 'react';
import { Component } from 'react';
import PersistentDrawerLeft from "../../commonComponents/navBar/NavBar";
import SideBar from "../../commonComponents/sidebar/Sidebar";

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