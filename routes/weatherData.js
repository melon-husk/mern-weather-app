const { default: Axios } = require("axios");
const { response } = require("express");
const express = require("express");
const router = express.Router();
const flatted = require("flatted");
const WeatherData = require("../models/weather");

async function data(req, res, err) {
  const { lat, lon } = req.body;
  try {
    const response = await Axios.get(
      "https://run.mocky.io/v3/bb3944a8-9bc6-4ce0-9cbd-ff9cbe9d6e1c"
    );
    const data = new WeatherData({
      data: response.data,
    });
    const savedData = await data.save();
    res.send(response.data);
    console.log("from api");
    console.log(err);
  } catch (error) {
    console.log(error);
  }
}
router.post("/find_data", async (req, res) => {
  try {
    const { lat, lon } = req.body;
    WeatherData.find(
      { $and: [{ "data.lat": lat }, { "data.lon": lon }] },
      (err, document) => {
        if (document.length > 0) {
          res.send(document);
          console.log(document.length);
          console.log(document);
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
