const User = require("./User");
const Joke = require("./Joke");
const Vote = require("./Vote");

// user has many joke
User.hasMany(Joke, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// user has one vote
User.hasOne(Vote, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// joke has many votes
Joke.hasMany(Vote, {
  foreignKey: 'joke_id',
  onDelete: 'CASCADE'
});

// joke belong to users
Joke.belongsTo(User, {
  foreignKey: 'user_id'
});

// vote belongs to user
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

// vote belongs to joke
Vote.belongsTo(Joke, {
  foreignKey: 'joke_id'
});

module.exports = { User, Joke, Vote };
