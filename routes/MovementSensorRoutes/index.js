const express = require("express");
const {
  createMovementSensor,
  deleteMovementSensor,
  getAllMovementSensors,
  getMovementSensorById,
  getMovementSensorByUserId,
  updateMovementSensor,
} = require("../../controllers/MovementSensorController");

const router = express.Router();

router.route("/").get(getAllMovementSensors).post(createMovementSensor);
router
  .route("/:id")
  .get(getMovementSensorById)
  .put(updateMovementSensor)
  .delete(deleteMovementSensor);

router.route("/user/:userId").get(getMovementSensorByUserId);

module.exports = router;
