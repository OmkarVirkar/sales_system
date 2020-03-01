const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
let sess= [];

module.exports = {sess};