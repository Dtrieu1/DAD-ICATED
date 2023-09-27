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
    value: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // joke id
    joke_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "joke",
        key: "id",
        allowNull: false,
      },
    },
    // user id
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        allowNull: false,
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
