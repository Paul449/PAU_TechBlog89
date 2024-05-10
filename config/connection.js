//importing sequelize library
const {Sequelize} = require('sequelize');
//connecting to database using sequelize
const sequelize = process.env.DB_URL
? new Sequelize(process.env.DB_URL)
: new Sequelize(
    process.env.DB_URL,
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:'localhost',
        dialect:'postgres',
    }
);

//testing connection with database, using authenticate
try{
    sequelize.authenticate(); // test connection
    console.log("Your connection to database is stable");
} catch(error){ //throw error if unable to connect
    console.error('Your connection is unstable:', error);
}

module.exports = sequelize;