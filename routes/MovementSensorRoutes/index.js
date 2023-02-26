const express = require("express");
const {
  createMovementSensor,
  deleteMovementSensor,
  getAllMovementSensors,
  getMovementSensorById,
  updateMovementSensor,
} = require("../../controllers/MovementSensorController");

const router = express.Router();

router.route("/").get(getAllMovementSensors).post(createMovementSensor);
router.route("/:id").get(getMovementSensorById).put(updateMovementSensor).delete(deleteMovementSensor);

module.exports = router;
