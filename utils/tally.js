const { Joke, Vote } = require("../models");

const tallyVotes = async (joke) => {
  // get all votes
  const votes = await Vote.findAll();

  // get upvotes
  const upvotes = await Vote.count({
    where: {
      value: true,
    },
  });

  // get downvotes
  const downvotes = await Vote.count({
    where: {
      value: false,
    },
  });

  // update joke with values where ids match
  joke = await Joke.update(
    { 
        upvotes: upvotes,
        downvotes: downvotes,
    },
    {
      where: {
        id: votes.joke_id,
      },
    }
  );

  return joke;
};

module.exports = tallyVotes;