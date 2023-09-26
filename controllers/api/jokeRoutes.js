// connections
const router = require('express').Router();
const { Joke } = require('../../models');


// random joke get route
router.get("/random", async (req, res) => {
    try {
      const jokeData = await Joke.findByPk // helper to generate ramdon id from table
      // function
      res.status(200).json(jokeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// all jokes get route -- newest
router.get('/new', async (req, res) => {
    try {
      const jokeData = await Joke.findAll({ order: [['date_created', 'DESC']]});
      res.status(200).json(jokeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// all jokes get route -- top voted
router.get('/top', async (req, res) => {
    try {
      const jokeData = await Joke.findAll(); // order by votes, thru table ????
      res.status(200).json(jokeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// create joke post route
router.post('/', async (req, res) => {
    try {
      const jokeData = await Joke.create(req.body);
      res.status(200).json(jokeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });