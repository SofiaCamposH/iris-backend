const movementSensorService = require("../../services/MovementSensorService");

exports.getAllMovementSensors = async (req, res) => {
  try {
    console.log("getAllMovementSensors");
    const movementSensors =
      await movementSensorService.getAllMovementReadings();
    res.json({ data: movementSensors, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMovementSensor = async (req, res) => {
  try {
    const movementSensor = await movementSensorService.createMovementReading(
      req.body
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
