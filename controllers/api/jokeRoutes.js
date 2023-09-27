// connections
const router = require("express").Router();
const { User, Joke, Vote } = require("../../models");

// create joke post route
router.post("/", async (req, res) => {
  try {
    const newJoke = await Joke.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJoke);
  } catch (err) {
    res.status(400).json(err);
  }
});

// put route to upvote


// put route to downvote

module.exports = router;
