import React, { Fragment } from 'react';
import { Component } from 'react';
import {ToolBar, SideDrawer, Backdrop, OPTIONS} from "../../commonComponents/navBar/NavBar";
import {setBarHeights} from "../../media/js/utils";
import 'bootstrap';
import $ from 'jquery';
// import PersistentDrawerLeft from "./components/NavBar";
// import SideBar from "./components/Sidebar";

export default class Inventory extends Component{

    constructor(){
        super();
        this.state = {
            showSidebar : true
        }
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
                    <SideDrawer selectedOption={OPTIONS.INVENTORY} />
                        
                        {/* <Backdrop /> */}
                    <div id="content_div" className="content_div">
                        <h1 className="text-center" >Work In Progress...</h1>
                    </div> 
                </div>
            </div>
        )
    }
}