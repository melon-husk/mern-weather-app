const { default: Axios } = require("axios");
const express = require("express");
const router = express.Router();
const WeatherData = require("../models/weather");

async function data(req, res, err) {
  const { lat, lng } = req.body;
  try {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );
    const data = new WeatherData({
      data: response.data,
    });
    await data.save();
    res.send(response.data);
    console.log("from api");
  } catch (error) {
    console.log(error);
  }
}
router.post("/get_data", async (req, res) => {
  try {
    const { lat, lng } = req.body;
    WeatherData.find(
      { $and: [{ "data.lat": lat }, { "data.lon": lng }] },
      (err, document) => {
        if (document.length > 0) {
          res.send(document[0].data);
          console.log("from db");
        } else {
          data(req, res, err);
        }
      }
    );
  } catch (error) {
    res.status(401);
    console.log(error);
  }
});

module.exports = router;
