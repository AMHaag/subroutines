const router = require('express').Router();
const userRoutes = require('./user-routes');
const routineRoutes = require('./routine-routes')
router.use('./routine',routineRoutes)
router.use('/user', userRoutes);


router.use((req, res) => {
  res.status(404).send('Not found');
});

module.exports = router;
