const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Vote extends Model {}

Vote.init(
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // vote value
    vote_value: {
      type: DataTypes.BOOLEAN,
    },
    // joke id
    joke_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "joke",
        key: "id",
      },
    },
    // user id
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    // sequelize
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "vote",
  }
);

module.exports = Vote;
