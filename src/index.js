import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter , Route } from "react-router-dom";
import LoginPage from "./views/loginPage/login";
import MainPage from "./views/MainPage/MainPage";
import 'bootstrap';
import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter>
        
            <Route exact path="/" component={LoginPage}>

            </Route>
            <Route path="/MainPage" component={MainPage} />
        
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
