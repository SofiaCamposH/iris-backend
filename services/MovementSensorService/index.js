const MovementSensorModel = require("../../models/MovementSensor");

exports.getAllMovementReadings = async () => {
  return MovementSensorModel.find();
};

exports.createMovementReadingByUser = async (reading, userId) => {
  return MovementSensorModel.create({ userId, reading });
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
