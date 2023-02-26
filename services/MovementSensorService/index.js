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

exports.updateMovementReading = async (id, blog) => {
  return MovementSensorModel.findByIdAndUpdate(id, blog);
};

exports.deleteMovementReading = async (id) => {
  return MovementSensorModel.findByIdAndDelete(id);
};
