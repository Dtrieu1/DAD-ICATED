const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jokeRoutes = require('./jokeRoutes');

router.use('/user', userRoutes);
router.use('/jokes', jokeRoutes);

module.exports = router;