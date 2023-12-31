const sequelize = require("../config/connection");
const { User, Joke } = require("../models");

const userData = require("./userData.json");
const jokeData = require("./jokeData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // create users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // create jokes w/ random user id
  for (const joke of jokeData) {
    await Joke.create({
      ...joke,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // // create votes randomly
  // for (let i = 0; i < 20; i++) {
  //   // random joke id
  //   const { id: randomJokeId } =
  //     jokes[Math.floor(Math.random() * jokes.length)];

  //   // random user id
  //   const { id: randomUserId } =
  //     users[Math.floor(Math.random() * users.length)];

  //   await Vote.create({
  //     value: Math.random() < 0.5,
  //     joke_id: randomJokeId,
  //     user_id: randomUserId,
  //   }).catch((err) => {
  //     // catch any dup joke_id / user_id pairings
  //     console.log(err);
  //   });
  // }

  // // tally votes for all jokes
  // const tallyPromises = jokes.map((joke) => tallyVotes(joke));
  // //return jokes
  // const updatedJokes = await Promise.all(tallyPromises);
  // console.log(updatedJokes);

  process.exit(0);
};

seedDatabase();
