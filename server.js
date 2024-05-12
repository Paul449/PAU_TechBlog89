/*Importing useful libraries */
const PATH = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//import sequelize connection
const sequelize = require('./config/connection');
//calling express in our app
const app = express();