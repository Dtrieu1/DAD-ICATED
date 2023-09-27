// connections
const router = require("express").Router();
const { User, Joke, Vote } = require("../../models");

// random joke get route
router.get("/random", async (req, res) => {
  // random user id
  const users = await User.findAll();
  // console.log(users);
  // console.log(users[Math.floor(Math.random() * users.length)]);
  const { id: randomUserId } = users[Math.floor(Math.random() * users.length)];

  try {
    // get one random joke, join with user and vote data
    const jokeData = await Joke.findOne({
      where: [
        {
          user_id: randomUserId,
        },
      ],
      include: [
        {
          model: User,
          attribute: ["username"],
        },
      ],
    });

    //serialize
    const jokes = jokeData.map((joke) => joke.get({ plain: true }));

    // pass into template
    res.render("homepage", {
      jokes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// all jokes get route -- newest
router.get("/new", async (req, res) => {
  try {
    // get all jokes sorted by creation, join with user and vote data
    const jokeData = await Joke.findAll({
      include: [
        {
          model: User,
          attribute: ["username"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    //serialize
    const jokes = jokeData.map((joke) => joke.get({ plain: true }));

    // pass into template
    res.render("newJokes", {
      jokes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// all jokes get route -- top voted
router.get("/top", async (req, res) => {
  try {
    const jokeData = await Joke.findAll({
      include: [
        {
          model: User,
          attribute: ["username"],
        },
      ],
      order: [["upvotes", "DESC"]],
    });

    //serialize
    const jokes = jokeData.map((joke) => joke.get({ plain: true }));

    // pass into template
    res.render("topJokes", {
      jokes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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

module.exports = router;
