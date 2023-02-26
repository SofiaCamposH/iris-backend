const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
const movementSensorRouter = require("./routes/MovementSensorRoutes");

app.use("/api/movement", movementSensorRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
// 

app.listen(process.env.PORT || 3333);
