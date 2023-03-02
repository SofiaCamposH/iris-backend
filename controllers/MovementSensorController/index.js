const { default: mongoose } = require("mongoose");
const movementSensorService = require("../../services/MovementSensorService");

exports.getAllMovementSensors = async (req, res) => {
  try {
    const movementSensors =
      await movementSensorService.getAllMovementReadings();
    res.json({ data: movementSensors, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMovementSensorById = async (req, res) => {
  try {
    const movementSensor =
      await movementSensorService.createMovementReadingByUser(
        req.body.reading,
        req.params.userId
      );
    res.json({ data: movementSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovementSensorById = async (req, res) => {
  try {
    const movementSensor = await movementSensorService.getMovementReadingById(
      req.params.id
    );
    res.json({ data: movementSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovementSensorByUserId = async (req, res) => {
  try {
    const movementSensor =
      await movementSensorService.getMovementReadingByUserId(req.params.userId);
    res.json({ data: movementSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMovementSensor = async (req, res) => {
  try {
    const movementSensor = await movementSensorService.updateMovementReading(
      req.params.id,
      req.body
    );
    res.json({ data: movementSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMovementSensor = async (req, res) => {
  try {
    const movementSensor = await movementSensorService.deleteMovementReading(
      req.params.id
    );
    res.json({ data: movementSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
