// connections
const router = require("express").Router();
const { User, Joke } = require("../../models");

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
    console.log(err);
  }
});

// put route to upvote
router.put("/up/:id", async (req, res) => {
  try {
    const updateJoke = await Joke.increment(
      { upvotes: 1 },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updateJoke) {
      res.status(400).json({ message: "Unable to vote on this joke" });
      return;
    }

    res.status(200).json(updateJoke);
  } catch (err) {
    res.status(400).json({ message: "An error occurred" });
    console.log(err);
  }
});

// put route to downvote
router.put("/down/:id", async (req, res) => {
  try {
    const updateJoke = await Joke.decrement(
      { downvotes: 1 },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updateJoke) {
      res.status(400).json({ message: "Unable to vote on this joke" });
      return;
    }

    res.status(200).json(updateJoke);
  } catch {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;
