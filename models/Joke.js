const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Vote = require("./Vote"); 

class Joke extends Model {}

Joke.init(
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // joke
    joke: {
      type: DataTypes.STRING, // defines the data type for the joke
    },
    //upvotes
    upvotes: {
      type: DataTypes.INTEGER,
    },
    //downvotes
    downvotes: {
      type: DataTypes.INTEGER,
    },
    // user id
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user", // should match the model name in the User model
        key: "id", // should match the primary key in the User model
      },
    },
  },
  {
    //hooks
    hooks: {
      beforeBulkCreate: async (joke, options) => {
        joke.upvotes = 0;
        joke.downvotes = 0;
      },
    },
    // sequelize
    sequelize,
    timestamps: true,
    createdAt: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Joke",
  }
);

module.exports = Joke;
