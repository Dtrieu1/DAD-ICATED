// connections
const router = require("express").Router();
const { User, Joke } = require("../models");
const imgStyle = require("../utils/image");

// main page get route
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// submit joke get route
router.get("/submit", async (req, res) => {
  try {
    console.log(req.session.user_id);
    const userData = await User.findOne({ where: { id: req.session.user_id } });
    const user = userData.get({ plain: true });
    console.log(user);
    res.render("submitAJoke", {
      user,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// random joke generator
router.get("/random", async (req, res) => {
  // random user id

  try {
    const users = await User.findAll();

    // get one random joke, join with user and vote data
    const jokeData = await Joke.findOne({
      where: [
        {
          user_id: users[Math.floor(Math.random() * users.length)].id,
        },
      ],
      include: [
        {
          model: User,
          attribute: ["username"],
        },
      ],
    });
    console.log(jokeData)
    //serialize
    const joke = jokeData?jokeData.get({ plain: true }):{joke:""};
    console.log(joke);
    // pass into template
    res.render("homepage", {
      ...joke,
      loggedIn: req.session.loggedIn,
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
    console.log(jokes);
    // pass into template
    res.render("newJokes", {
      jokes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// signup joke get route
router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// login get route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
