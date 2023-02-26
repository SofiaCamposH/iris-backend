const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pulseSensorSchema = new Schema({
  //   userId: String,
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

module.exports = mongoose.model("PulseSensor", pulseSensorSchema);
