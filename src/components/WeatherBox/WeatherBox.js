import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles({
  constainer: {
    borderRadius: "12px",
    background: "black",
    color: "white",
    textAlign: "left",
    fontFamily: "Roboto",
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
    fontSize: "1.7rem",
  },
  timeOfDay: {
    fontWeight: "normal",
    fontSize: "1.4rem",
    margin: "0px 0px 0px 18px",
  },
  temperature: {
    fontWeight: "bold",
    fontSize: "3.85rem",
    margin: "0",
    textAlign: "right",
    padding: "8px 18px 0px 0px",
  },
  feelsLike: {
    margin: "0",
    textAlign: "right",
    padding: "5px 45px 0px 0px",
    fontWeight: "500",
  },
  currentDay: {
    margin: "0",
    textAlign: "right",
    padding: "10px 55px 10px 0px",
    fontWeight: "500",
    fontSize: "1.6rem",
  },
});
export default function WeatherBox() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      className={classes.constainer}
    >
      <Grid item xs={6} sm={6} lg={6} xl={6}>
        <img
          src={require("./svg/002-storm.svg")}
          className={classes.image}
          alt={"002-storm.svg"}
        />
        <p className={classes.weatherDescription}>Heavy Rain</p>
        <p className={classes.timeOfDay}>Morning</p>
      </Grid>
      <Grid item xs={6} sm={6} lg={6} xl={6}>
        <p className={classes.temperature}>133°F</p>
        <p className={classes.feelsLike}>Feels like 131°F</p>
        <p className={classes.currentDay}>Monday</p>
      </Grid>
    </Grid>
  );
}
