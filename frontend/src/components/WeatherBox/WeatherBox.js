import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
const { DateTime } = require("luxon");

const useStyles = makeStyles({
  container: {
    borderRadius: "12px",
    background: "black",
    color: "white",
    textAlign: "left",
    fontFamily: "Roboto",
    height: "150px",
    margin: "10px 10px 0px 0px",
  },
  image: {
    height: "70px",
    width: "90px",
    padding: "8px 0px 0px 0px",
    margin: "0px 0px 0px 18px",
  },
  weatherDescription: {
    margin: "0px 0px 0px 18px",
    fontWeight: "normal",
    fontSize: "1.4rem",
  },
  currentTime: {
    fontWeight: "normal",
    fontSize: "1.4rem",
    margin: "0px 0px 0px 18px",
  },
  temperature: {
    fontWeight: "bold",
    fontSize: "3.85rem",
    margin: "0",
    textAlign: "right",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    cursor: "pointer",
  },
  feelsLike: {
    margin: "0",
    textAlign: "right",
    fontWeight: "500",
  },
  currentDay: {
    margin: "0",
    textAlign: "right",
    padding: "10px 0px 10px 0px",
    fontWeight: "500",
    fontSize: "1.6rem",
  },
});
export default function WeatherBox(props) {
  const classes = useStyles();

  const [temperatureC, setTemperatureC] = useState();
  const [temperatureF, setTemperatureF] = useState();
  const [weatherDescription, setWeatherDescription] = useState();
  const [currentTime, setCurrentTime] = useState();

  const [feelsLikeC, setFeelsLikeC] = useState();
  const [feelsLikeF, setFeelsLikeF] = useState();
  const [currentDay, setCurrentDay] = useState();

  useEffect(() => {
    setTemperatureC(`${Math.round(props.data.current.temp)}°C`);
    setTemperatureF(`${Math.round(props.data.current.temp * 1.8 + 32)}°F`);
    setWeatherDescription(props.data.current.weather[0].description);
    setCurrentTime(
      DateTime.local()
        .setZone(props.data.timezone)
        .toLocaleString(DateTime.TIME_SIMPLE)
    );
    setFeelsLikeC(`${Math.round(props.data.current.feels_like)}°C`);
    setFeelsLikeF(`${Math.round(props.data.current.feels_like * 1.8 + 32)}°F`);
    setCurrentDay(
      DateTime.fromSeconds(props.data.current.dt).toLocaleString({
        weekday: "long",
      })
    );
  }, [props.data]);
  const switchTemp = () => {
    if (!props.showTempInC) {
      props.setShowTempInC(true);
    } else {
      props.setShowTempInC(false);
    }
  };

  return (
    <div style={{ margin: "10px 10px 0px 10px" }}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        className={classes.container}
      >
        <Grid item xs={6} sm={6} lg={6} xl={6}>
          <img
            src={require(`../svg/${props.data.current.weather[0].icon}.svg`)}
            className={classes.image}
            alt={"weather"}
          />
          <p className={classes.weatherDescription}>{weatherDescription}</p>
          <p className={classes.currentTime}>{currentTime}</p>
        </Grid>
        <Grid item xs={6} sm={6} lg={6} xl={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "40px",
            }}
          >
            <p className={classes.temperature} onClick={switchTemp}>
              {props.showTempInC ? temperatureC : temperatureF}
            </p>
            <p className={classes.feelsLike}>{`Feels like ${
              props.showTempInC ? feelsLikeC : feelsLikeF
            }`}</p>
            <p className={classes.currentDay}>{currentDay}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
