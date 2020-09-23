const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const weatherData = require("./routes/weatherData");

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const ATLAS_URI = process.env.ATLAS_URI;
mongoose
  .connect(ATLAS_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", weatherData);

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
