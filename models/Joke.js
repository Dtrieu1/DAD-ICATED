const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
      allowNull: false,
      type: DataTypes.STRING, // defines the data type for the joke
    },
    //upvotes
    upvotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    //downvotes
    downvotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    // user id
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user", // should match the model name in the User model
        key: "id", // should match the primary key in the User model
      },
    },
  },
  {
    // sequelize
    sequelize,
    timestamps: true,
    createdAt: true,
    updatedAt: false,
    freezeTableName: true,
    underscored: true,
    modelName: "joke",
  }
);

module.exports = Joke;
