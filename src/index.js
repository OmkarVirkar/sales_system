import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter , Route } from "react-router-dom";
import LoginPage from "./views/loginPage/login";
import MainPage from "./views/MainPage/MainPage";
import Sales from "./views/Sales/Sales";
import Inventory from "./views/Inventory/Inventory";
import UserProfile from "./views/UserProfile/UserProfile";
import 'bootstrap';
import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter>
            <Route exact path="/" component={LoginPage} />
            <Route path="/MainPage" component={MainPage} />
            <Route path="/Inventory" component={Inventory} />
            <Route path="/Sales" component={Sales} />
            <Route path="/UserProfile" component={UserProfile} />  
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
