import React, { Fragment } from 'react';
import { Component } from 'react';
import {ToolBar, SideDrawer, Backdrop, OPTIONS} from "../../commonComponents/navBar/NavBar";
import {setBarHeights} from "../../media/js/utils";
import {OverViewHeader} from "./components/UserProfileComponents";
import ProfileDetails from "./components/UserProfileComponents";
import 'bootstrap';
import "./media/userProfile.css";
import $ from 'jquery';
// import PersistentDrawerLeft from "./components/NavBar";
// import SideBar from "./components/Sidebar";

export default class UserProfile extends Component{

    constructor(){
        super();
        this.state = {
            showSidebar : true
        }
    }

    componentWillMount(){
       
    }

    componentDidMount = () => {
        setBarHeights();

        $( window ).resize(function() {
            setBarHeights();
        });
    }

    showNavBar = (option) => {
        this.setState({
            showSidebar: option
        })
    }

    goToLoginPage = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div style={{height:'100%'}}>
                <div>
                <ToolBar showSideDrawer = {this.showSideDrawer}/>
                </div>
                <div>
                    <SideDrawer selectedOption={OPTIONS.USER_INFO} />
                        
                        {/* <Backdrop /> */}
                    <div id="content_div" className="content_div">
                        <OverViewHeader/>
                    
                        <ProfileDetails/>
                        
                    </div> 
                </div>
            </div>
        )
    }
}