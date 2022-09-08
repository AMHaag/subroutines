const { Schema, model } = require('mongoose');

const RoutineSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  trigger: {
    type: Number,
    min: 0,
    max: 31,
  },
  status: {
    type: String,
    enum: {
      values: ['Active', 'Archived', 'Weekly', 'Monthly', 'Unknown'],
      message: '{VALUE} is not supported',
    },
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  color: {
    type: String,
  },
  icon: {
    type: String,
  },
  pester: {
    type: Boolean,
  },
});

const Routine = model('Routine', RoutineSchema);

module.exports = Routine;
