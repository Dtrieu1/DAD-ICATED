const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User"); // Import the User model

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
    // sequelize
    sequelize,
    timestamps: true,
    createdAt: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Joke",
  }
);

// Joke.belongsTo(User, {
//     foreignKey: 'user_id',  //c??
//   });

module.exports = Joke;
