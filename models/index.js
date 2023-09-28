const User = require("./User");
const Joke = require("./Joke");

// user has many joke
User.hasMany(Joke, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// joke belong to users
Joke.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Joke };
