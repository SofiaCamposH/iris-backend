const express = require("express");
const {
  createPulseSensorById,
  deletePulseSensor,
  getAllPulseSensors,
  getPulseSensorById,
  getPulseSensorByUserId,
  updatePulseSensor,
} = require("../../controllers/PulseSensorController");

const router = express.Router();

router.route("/").get(getAllPulseSensors);
router
  .route("/:id")
  .get(getPulseSensorById)
  .put(updatePulseSensor)
  .delete(deletePulseSensor);

router
  .route("/user/:userId")
  .get(getPulseSensorByUserId)
  .post(createPulseSensorById);

module.exports = router;
