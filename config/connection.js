// connect with sequelize
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

let sequelize;

if(process.env.DB_URL){
    sequelize = new Sequelize(process.env.DB_URL);
} else {
  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:'localhost',
        dialect: 'postgres'
    }
  );
}

module.exports = sequelize;