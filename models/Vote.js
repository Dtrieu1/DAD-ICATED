const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
    {
        // id

        // upvotes
        // only one per vote ??

        // downvotes
        // only one per vote ??

        // joke id

        // user id
    },
    {
        // sequelize
    }
);

module.exports = Vote;