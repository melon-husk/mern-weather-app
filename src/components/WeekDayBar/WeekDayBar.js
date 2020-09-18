import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  container: {
    borderRadius: "12px",
    background: "black",
    color: "white",
    textAlign: "left",
    fontFamily: "Roboto",
    marginTop: "10px",
    padding: "8px",
  },
  weekDay: {
    fontWeight: "400",
    fontSize: "1.1rem",
    margin: "0",
  },
  image: {
    width: "30px",
    height: "30px",
  },
  arrow: {
    width: "20px",
    height: "20px",
    float: "left",
  },
  temperature: {
    fontWeight: "bold",
    fontSize: "1rem",
    margin: "0",
  },
});

export default function WeekDayBar({ day }) {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={3} sm={3} lg={3} xl={3} style={{ paddingLeft: "10px" }}>
        <p className={classes.weekDay}>{day}</p>
      </Grid>
      <Grid item xs={3} sm={3} lg={3} xl={3} style={{ paddingLeft: "10px" }}>
        <img
          src={require("./svg/003-rainy.svg")}
          alt="storm"
          className={classes.image}
        />
      </Grid>
      <Grid item xs={2} sm={2} lg={2} xl={2} style={{ paddingLeft: "10px" }}>
        <img
          src={require("./svg/keyboard_arrow_up-24px.svg")}
          alt={"arrow up"}
          className={classes.arrow}
        />
        <p className={classes.temperature}>90°</p>
      </Grid>
      <Grid item xs={2} sm={2} lg={2} xl={2} style={{ paddingLeft: "10px" }}>
        <img
          src={require("./svg/keyboard_arrow_down-24px.svg")}
          alt={"arrow up"}
          className={classes.arrow}
        />
        <p className={classes.temperature}>90°</p>
      </Grid>
    </Grid>
  );
}
