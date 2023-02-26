const MovementSensorModel = require("../../models/MovementSensor");

exports.getAllMovementReadings = async () => {
  return MovementSensorModel.find();
};

exports.createMovementReading = async (reading) => {
  return MovementSensorModel.create(reading);
};

exports.getMovementReadingById = async (id) => {
  return MovementSensorModel.findById(id);
};

exports.getMovementReadingByUserId = async (userId) => {
  return MovementSensorModel.find({ userId: userId });
};

exports.updateMovementReading = async (id, movement) => {
  return MovementSensorModel.findByIdAndUpdate(id, movement);
};

exports.deleteMovementReading = async (id) => {
  return MovementSensorModel.findByIdAndDelete(id);
};
