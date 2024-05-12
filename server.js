/*Importing useful libraries */
const path = require('path');
const express = require('express');
//const session = require('express-session');
const exphbs = require('express-handlebars');
//import sequelize connection
//const sequelize = require('./config/connection');
//port number
const PORT = process.env.PORT||3002;
const hbs = exphbs.create()
//calling express in our app
const app = express();
//view engine setup
app.engine('handlebars', require('ejs').renderFile);
//render handlebar template
app.get('/',(req,res)=>{
    res.render('./layout/main.handlebars')
});
//
app.use(express.static(path.join(__dirname, '/public')));
//listening through port 3002
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});