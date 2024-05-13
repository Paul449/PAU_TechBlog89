/*Importing useful libraries */
const path = require('path');
const express = require('express');
//const session = require('express-session');
const exphbs = require('express-handlebars');
//import sequelize connection
//const sequelize = require('./config/connection');
//port number
const PORT = process.env.PORT||3002;
//calling express in our app
const app = express();
//look for static files on directory (css)
app.use(express.static('public'));
const hbs = exphbs.create({})
//view engine setup
app.set('views',path.join(__dirname,'views'))
app.engine('handlebars', require('ejs').renderFile);
//render handlebar template
app.get('/',(req,res)=>{
    res.render('./layout/main.handlebars')
});
//listening through port 3002
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});