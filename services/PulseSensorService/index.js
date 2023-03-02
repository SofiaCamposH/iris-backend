const PulseSensorModel = require("../../models/PulseSensor");

exports.getAllPulseReadings = async () => {
  return PulseSensorModel.find();
};

exports.createPulseReadingByUser = async (reading, userId) => {
  return PulseSensorModel.create({ userId, reading });
};

exports.getPulseReadingById = async (id) => {
  return PulseSensorModel.findById(id);
};

exports.getPulseReadingByUserId = async (userId) => {
  return PulseSensorModel.find({ userId: userId });
};

exports.updatePulseReading = async (id, pulse) => {
  return PulseSensorModel.findByIdAndUpdate(id, pulse);
};

exports.deletePulseReading = async (id) => {
  return PulseSensorModel.findByIdAndDelete(id);
};
