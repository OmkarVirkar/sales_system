import React, {Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles, fade } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import StorageIcon from '@material-ui/icons/Storage';
import MoneyIcon from '@material-ui/icons/MonetizationOn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {logoutUserSetting} from "../../../models/media/js/externalRequestManager";
import {useStyles} from "./media/main";
import ProjectTable from "./ProjectTable";

import $ from 'jquery';
import "../../../commonComponents/navBar/media/main.css";



export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    var setting = logoutUserSetting();
    
    $.ajax(setting).done(function(){
        props.logout();
    });
  }

 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        id="appBar"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sales Dashboard
          </Typography>
          
         
        </Toolbar>
       
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
   
        <List>
        
            <ListItem button key={"Account Settings"} >
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary={"Account Settings"} />
            </ListItem>
            <ListItem button key={"Sales"}  >
              <ListItemIcon><MoneyIcon /></ListItemIcon>
              <ListItemText primary={"Sales"} />
            </ListItem>
            <ListItem button key={"Inventory"}  >
              <ListItemIcon><StorageIcon /></ListItemIcon>
              <ListItemText primary={"Inventory"} />
            </ListItem>
            <ListItem button key={"Project settings"}  >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary={"Project settings"} />
            </ListItem>
            <ListItem button key={"Logout"} onClick={()=>logoutUser()} >
              <ListItemIcon><ExitToAppIcon /> </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          
        </List>
        
      </Drawer>
     <main
     className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}
   >
     <div className={classes.drawerHeader} />
     <ProjectTable />
   </main>
   </div>
  );
}