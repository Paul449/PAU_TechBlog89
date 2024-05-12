//importing sequelize library
const {Sequelize} = require('sequelize');
//importing and connecting with dotenv library
require('dotenv').config();
//connecting to database using sequelize
const sequelize = process.env.DB_URL
? new Sequelize(process.env.DB_URL)
: new Sequelize(
    process.env.DB_URL,
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:'postgres',
    }
);
//testing connection with database, using authenticate
const TestConnection = async()=>{
    try{
        await sequelize.authenticate(); // test connection
        console.log("Your connection to database is stable");
    } catch(error){ //throw error if unable to connect
        console.error('Your connection is unstable:', error);
    }
};
//exporting sequelize database connection to use with models
module.exports = sequelize;