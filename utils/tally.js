const { Joke, Vote } = require("../models");

const tallyVotes = async (joke) => {
  // get id of joke
  const id = joke.dataValues.id;
  console.log(id);

  // get upvotes
  const upvotes = await Vote.count({
    where: [
      {
        value: true,
        joke_id: id,
      },
    ],
  });

  // get downvotes
  const downvotes = await Vote.count({
    where: [
      {
        value: false,
        joke_id: id,
      },
    ],
  });

  // update joke with values where ids match
  await Joke.update(
    {
      upvotes: upvotes,
      downvotes: downvotes,
    },
    {
      where: {
        id: id,
      },
    }
  );

  // get the updated joke
  const updatedJoke = await Joke.findByPk(id);

  console.log(updatedJoke);
  return updatedJoke;
};

module.exports = tallyVotes;
