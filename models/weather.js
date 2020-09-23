const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeatherDataSchema = new Schema({
  data: { type: Object },
  expiresAfter: { type: Date, expires: "15m", default: Date.now },
});

const WeatherData = mongoose.model("WeatherData", WeatherDataSchema);

module.exports = WeatherData;
