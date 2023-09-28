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
      type: DataTypes.STRING, 
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
        model: "user", 
        key: "id",
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
