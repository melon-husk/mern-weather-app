import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const { DateTime } = require("luxon");

const useStyle = makeStyles({
  container: {
    borderRadius: "12px",
    background: "black",
    color: "white",
    textAlign: "left",
    fontFamily: "Roboto",
    padding: "8px",
    height: "70px",
  },
  weekDay: {
    fontWeight: "400",
    fontSize: "1.3rem",
    margin: "0",
  },
  image: {
    width: "45px",
    height: "45px",
  },
  arrow: {
    width: "25px",
    height: "25px",
    float: "left",
  },
  temperature: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    margin: "0",
  },
});

export default function WeekDayBar(props) {
  const classes = useStyle();
  const [weekDay, setWeekDay] = useState(null);
  const [highTempC, setHighTempC] = useState(null);
  const [lowTempC, setLowTempC] = useState(null);
  const [highTempF, setHighTempF] = useState(null);
  const [lowTempF, setLowTempF] = useState(null);
  useEffect(() => {
    setWeekDay(
      DateTime.fromSeconds(props.data.daily[props.index].dt).toLocaleString({
        weekday: "long",
      })
    );
    setHighTempC(`${Math.round(props.data.daily[props.index].temp.max)}°C`);
    setLowTempC(`${Math.round(props.data.daily[props.index].temp.min)}°C`);
    setHighTempF(
      `${Math.round(props.data.daily[props.index].temp.max * 1.8 + 32)}°F`
    );
    setLowTempF(
      `${Math.round(props.data.daily[props.index].temp.min * 1.8 + 32)}°F`
    );
  }, [props.data, props.index]);
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={4} sm={3} lg={3} xl={3} style={{ paddingLeft: "10px" }}>
        <p className={classes.weekDay}>{weekDay}</p>
      </Grid>
      <Grid item xs={2} sm={3} lg={3} xl={3} style={{ paddingLeft: "10px" }}>
        <img
          src={require(`../svg/${
            props.data.daily[props.index].weather[0].icon
          }.svg`)}
          alt="storm"
          className={classes.image}
        />
      </Grid>
      <Grid item xs={3} sm={3} lg={2} xl={2} style={{ paddingLeft: "10px" }}>
        <img
          src={require("../svg/keyboard_arrow_up-24px.svg")}
          alt={"arrow up"}
          className={classes.arrow}
        />
        <p className={classes.temperature}>
          {props.showTempInC ? highTempC : highTempF}
        </p>
      </Grid>
      <Grid item xs={3} sm={3} lg={2} xl={2} style={{ paddingLeft: "10px" }}>
        <img
          src={require("../svg/keyboard_arrow_down-24px.svg")}
          alt={"arrow up"}
          className={classes.arrow}
        />
        <p className={classes.temperature}>
          {props.showTempInC ? lowTempC : lowTempF}
        </p>
      </Grid>
    </Grid>
  );
}
