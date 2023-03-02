const { default: mongoose } = require("mongoose");
const pulseSensorService = require("../../services/PulseSensorService");

exports.getAllPulseSensors = async (req, res) => {
  try {
    const pulseSensors =
      await pulseSensorService.getAllPulseReadings();
    res.json({ data: pulseSensors, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPulseSensorById = async (req, res) => {
  try {
    const pulseSensor =
      await pulseSensorService.createPulseReadingByUser(
        req.body.reading,
        req.params.userId
      );
    res.json({ data: pulseSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPulseSensorById = async (req, res) => {
  try {
    const pulseSensor = await pulseSensorService.getPulseReadingById(
      req.params.id
    );
    res.json({ data: pulseSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPulseSensorByUserId = async (req, res) => {
  try {
    const pulseSensor =
      await pulseSensorService.getPulseReadingByUserId(req.params.userId);
    res.json({ data: pulseSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePulseSensor = async (req, res) => {
  try {
    const pulseSensor = await pulseSensorService.updatePulseReading(
      req.params.id,
      req.body
    );
    res.json({ data: pulseSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePulseSensor = async (req, res) => {
  try {
    const pulseSensor = await pulseSensorService.deletePulseReading(
      req.params.id
    );
    res.json({ data: pulseSensor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
