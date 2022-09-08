const router = require('express').Router();

const {
  getAllRoutines,
  createRoutine,
  getRoutine,
  udpateRoutine,
  deleteRoutine,
  getRoutinesByUser,
  updateRoutine,
} = require('../../controllers/routine-controller');


//! /api/routine
router.route('/').get(getAllRoutines).post(createRoutine);

//! /api/routine/user/:id
router.route('/user/:id').get(getRoutinesByUser)
//! /api/routine/:id
router.route('/:id').get(getRoutine).put(updateRoutine).delete(deleteRoutine);

module.exports = router;