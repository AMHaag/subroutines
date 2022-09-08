const { Routine } = require('../models');

const routineController = {
  // ./api/routine/
  getAllRoutines: function (req, res) {
    Routine.find()
      .then((dbRoutineData) => res.json(dbRoutineData))
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: 'Invalid Request' });
      });
  },
  createRoutine: function ({ body }, res) {
    Routine.create(body)
      .then((dbRoutineData) => res.json(dbRoutineData))
      .catch((err) => res.status(400).json(err));
  },
  // ./api/routine/:id
  getRoutine: function ({ params, body }, res) {
    Routine.findOne({ _id: params.id })
      .then((dbRoutineData) => {
        if (dbRoutineData.creator != body.userId) {
          res.status(401);
          return;
        }
        res.json(dbRoutineData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: 'not found' });
      });
  },
  updateRoutine: function ({ params, body }, res) {
    Routine.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbRoutineData) => {
        if (!dbRoutineData) {
          res.status(404).json({ message: 'Routine ID not found' });
          return;
        }
        if (dbRoutineData.creator != body.userId) {
          res.status(401);
          return;
        }
        res.json(dbRoutineData);
      })
      .catch((err) => res.json(err));
  },
  deleteRoutine: function ({ params }, res) {
    Routine.findOneAndDelete({ routineId: params.id })
      .then((dbRoutineData) => {
        if (!dbRoutineData) {
          res.status(404).json({ message: 'Routine ID not found' });
          return;
        }
        // if (dbRoutineData.creator != body.userId) {
        //   res.status(401);
        //   return;
        // }
        res.json(dbRoutineData);
      })
      .catch((err) => res.json(err));
  },
  // ./api/routine/user/:id
  getRoutinesByUser: function (req, res) {
    Routine.find({creator:params.id})
      .then((dbRoutineData) => res.json(dbRoutineData))
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: 'Invalid Request' });
      });
  },
};

module.exports = routineController;
