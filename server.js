/*Importing useful libraries */
const PATH = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//import sequelize connection
const sequelize = require('./config/connection');
//port number
const PORT = 3002;
//calling express in our app
const app = express();
//handlebars reference to app
app.engine('main',require('ejs').renderFile)
//render handlebar template
app.get('/',async(req,res)=>{
    res.render('main.handlebars')
});
//listening through port 3002
app.listen(PORT,async()=>{
    console.log(`listening on port ${PORT}`)
});