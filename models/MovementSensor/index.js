const mongoose = require("mongoose");
const User = require("../User");
const Schema = mongoose.Schema;

const movementSensorSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  reading: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("MovementSensor", movementSensorSchema);
