// connections
const router = require("express").Router();
const { User, Joke, Vote } = require("../../models");

// create vote
router.post("/", async (req, res) => {
  try {
    const newVote = await Vote.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newVote);
  } catch (err) {
    res.status(400).json(err);
  }
});
