import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {logoutUserSetting} from "../../models/media/js/externalRequestManager";
import {jumpToPage} from "../../media/js/utils";
import "./media/navigationBar.css";
import $ from 'jquery';

export const OPTIONS = {"MAIN_PAGE":1, "INVENTORY": 2, "SALES": 3, "USER_INFO": 4};


let logoutUser = () => {
  var settings = logoutUserSetting();
  $.ajax(settings).done((response)=>{
    console.log(response);
    window.location = "/";
  })
}


export const ToolBar = props => {
 
return(
  <header id="toolbar" className="toolbar shadow-sm">
    <nav className="toolbar_navigation" >

    {/* <div className="ml-3 side_manu_icon" >
      <DrawerToggleButton />
    </div> */}
    <div className="toolbar_logo">Sales Dashboard</div>
    <div className="spacer"></div>
    <div className="toolbar_navigation_items">
      <ul>
        <li onClick={()=>logoutUser( )}>Logout</li>
      </ul>
    </div>
      
    </nav>
  </header>
);
  
}

export const DrawerToggleButton = ( props ) => {
 return <FontAwesomeIcon icon={faBars} />;
}

export const Backdrop = props => {
  return <div className="backdrop" ></div>;
}

export const SideDrawer = props => {
  let selectedTabClass="Selected_page shadow-sm";
  return(
    <div id="side-drawer" className="side-drawer shadow-sm display-inline-block">
    <nav >
      <ul>
        
        <li className={props.selectedOption === OPTIONS.MAIN_PAGE ? selectedTabClass : ""} 
          onClick={()=>{jumpToPage('/MainPage');}}
        >
          Main Page
        </li>
        <li 
          onClick={()=>{jumpToPage('/Inventory');}}
          className={props.selectedOption === OPTIONS.INVENTORY ? selectedTabClass : ""}
        >
          Inventory
        </li>
        <li 
          onClick={()=>{jumpToPage('/Sales');}}
          className={props.selectedOption === OPTIONS.SALES ? selectedTabClass : ""}
        >
          Sales
        </li>
        <li 
           onClick={()=>{jumpToPage('/UserProfile');}}
           className={props.selectedOption === OPTIONS.USER_INFO ? selectedTabClass : ""}
        >
          User Info
        </li>
      </ul>
    </nav>
    </div>
  );
}

