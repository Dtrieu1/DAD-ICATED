const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// security ?

class User extends Model {
    // security ?
}

User.init(
    {
        // id

        // email

        // password
    },
    {
        // hooks ?

        // sequelize
    }
);

module.exports = User;