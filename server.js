const path = require('path'); // importingt he path
const express = require('express'); // importing the express
const session = require('express-session');
const expressHandlebars = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
//connect session with sequelize when running port
const sequelizeStore = require('connect-session-sequelize')(session.Store);
// calling express on this app
const app = express();
//defining port
const PORT = process.env || 3001;

const handlebars = expressHandlebars.create({helpers});
const sessionConfig = {
    secret:'',
    cookie: {},
    resave:'false',
    saveUninitialized:'true',
    store: new sequelizeStore({
        db:sequelize
    })
}
app.use(session(sessionConfig));
app.engine('handlebars',handlebars.engine);
app.set('view','handlebars');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(`Listening on port:${PORT}`);
});
