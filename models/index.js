const User = require('./User');
const Joke = require('./Joke');
const Vote = require('./Vote');

// user has many jokes

// user has one vote ??
// hopefully one upvote/downvote pair per joke ??

// joke belongs to user

// joke has many votes

// vote belongs to joke ?? -- what about user ??

module.exports = { User, Joke, Vote };

