const { Joke, Vote } = require("../models");

const createUpvote = async (jokeId, userId) => {
  // make new upvote
  const voteData = await Vote.create({
    value: true,
    user_id: userId,
    joke_id: jokeId, // ???
  });
};

const createDownvote = async (jokeId, userId) => {
  // make new upvote
  const voteData = await Vote.create({
    value: false,
    user_id: userId,
    joke_id: jokeId, // ???
  });
};

const deleteVote = async (jokeId, userId) => {
  // delete vote
  const voteData = await Vote.destroy({
    where: {
      user_id: userId,
      joke_id: jokeId,
    },
  });
};

module.exports = { createUpvote, createDownvote, deleteVote }
