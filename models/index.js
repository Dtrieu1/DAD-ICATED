const User = require("./User");
const Joke = require("./Joke");
const Vote = require("./Vote");

// user has many jokes
User.belongsToMany(Joke, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Vote,
    unique: false, // ???
  },
  // Define an alias for when data is retrieved
  as: "user_joke",
});

// joke belongs to user
Joke.belongsToOne(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Vote,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "joke_author",
});

module.exports = { User, Joke, Vote };

// user has many joke

// user has one vote

// joke has many votes

// joke belong to users

// vote belongs to user

// vote belongs to joke
