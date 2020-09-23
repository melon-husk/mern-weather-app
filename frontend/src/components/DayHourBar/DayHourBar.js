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
  time: {
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
    fontWeight: "400",
    fontSize: "1.3rem",
    margin: "0",
  },
});

export default function DayHourBar(props) {
  const classes = useStyle();
  const [time, setTime] = useState(null);
  const [pop, setPop] = useState(null);

  useEffect(() => {
    setTime(
      DateTime.fromSeconds(props.data.hourly[props.index].dt).toLocaleString(
        DateTime.TIME_SIMPLE
      )
    );
    setPop(`${Math.round(props.data.hourly[props.index].pop * 100)}%`);
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
        <p className={classes.time}>{time}</p>
      </Grid>
      <Grid item xs={2} sm={3} lg={3} xl={3} style={{ paddingLeft: "10px" }}>
        <img
          src={require(`../svg/${
            props.data.hourly[props.index].weather[0].icon
          }.svg`)}
          alt="storm"
          className={classes.image}
        />
      </Grid>
      <Grid
        item
        xs={6}
        sm={6}
        lg={5}
        xl={5}
        style={{ paddingRight: "10px", textAlign: "center" }}
      >
        <p className={classes.temperature}>Rain: {pop}</p>
      </Grid>
    </Grid>
  );
}
