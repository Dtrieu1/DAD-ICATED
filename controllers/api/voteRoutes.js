// connections
const router = require("express").Router();
const { Joke, Vote } = require("../../models");

// create upvote
router.post("/up", async (req, res) => {
  try {
    const newVote = await Vote.create({
      value: true,
      user_id: req.session.user_id,
      joke_id: req.target.joke_id, // ???
    });

    const updateJoke = await Joke.increment(
      { upvote: 1 },
      {
        where: {
          id: req.target.joke_id, // ???
        },
      }
    );

    if (!updateJoke) {
      res.status(400).json({ message: "Unable to vote on this joke" });
      return;
    }

    res.status(200).json(newVote);
  } catch (err) {
    res.status(400).json(err);
  }
});

// create downvote
router.post("/down", async (req, res) => {
  try {
    const newVote = await Vote.create({
      value: false,
      user_id: req.session.user_id,
      joke_id: req.target.joke_id, // ???
    });

    const updateJoke = await Joke.decrement(
      { downvote: 1 },
      {
        where: {
          id: req.target.joke_id, // ???
        },
      }
    );

    if (!updateJoke) {
      res.status(400).json({ message: "Unable to vote on this joke" });
      return;
    }

    res.status(200).json(newVote);
  } catch (err) {
    res.status(400).json(err);
  }
});
