const bcrypt = require('bcrypt');
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const { Hooks } = require('sequelize/lib/hooks');
class User extends model{
    Password(loginPW){
        return bcrypt.compareSync(loginPW, this.password);
    }
};

User.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Username:{
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[8],
        }
    }
},
{
    Hooks:{
        beforeCreate:async (Userdata)=>{
            Userdata.password = await bcrypt.hash(Userdata.password, 10);
        }
    }
}
)

module.exports = User;