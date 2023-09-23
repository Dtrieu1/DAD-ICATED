const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Joke extends Model {}

Joke.init(
    {
        // id

        // joke

        // date created ?

        // user id
    },
    {
        // sequelize
    }
);

module.exports = Joke;