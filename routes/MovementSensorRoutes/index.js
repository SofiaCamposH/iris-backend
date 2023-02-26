const express = require("express");
const {
  createMovementSensorById,
  deleteMovementSensor,
  getAllMovementSensors,
  getMovementSensorById,
  getMovementSensorByUserId,
  updateMovementSensor,
} = require("../../controllers/MovementSensorController");

const router = express.Router();

router.route("/").get(getAllMovementSensors);
router
  .route("/:id")
  .get(getMovementSensorById)
  .put(updateMovementSensor)
  .delete(deleteMovementSensor);

router
  .route("/user/:userId")
  .get(getMovementSensorByUserId)
  .post(createMovementSensorById);

module.exports = router;
