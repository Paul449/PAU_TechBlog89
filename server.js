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
app.get('/Dashboard',(req,res)=>{
    res.render('./Dashboard.handlebars')
});

app.get('/Login',(req,res)=>{
    res.render('./Login.handlebars')
});

app.get('/sign-up',(req,res)=>{
    res.render('/signUp.handlebars')
});
app.get('/newPost',(req,res)=>{
    res.render('newPost.handlebars')
});
app.get('/EditPost',(req,res)=>{
    res.render('UpdatePost.handlebars')
});
app.get('/Homepage',(req,res)=>{
    res.render('Homepage.handlebars')
});
app.get('/SinglePost',(req,res)=>{
    res.render('SinglePost.handlebars')
});

//listening through port 3002
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});