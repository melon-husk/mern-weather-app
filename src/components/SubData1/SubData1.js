import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    borderRadius: "12px",
    background: "black",
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
    marginTop: "14px",
    padding: "8px",
  },
  heading: {
    color: "#E4E4E4",
    fontWeight: "500",
    fontSize: "1rem",
    margin: "0",
    padding: "0px 0px 5px 0px",
  },
  data: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    margin: "0",
  },
});
export default function SubData1() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={4} sm={4} lg={4} xl={4}>
        <p className={classes.heading}>Wind</p>
        <p className={classes.data}>33 m/s</p>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} xl={4}>
        <p className={classes.heading}>Humidity</p>
        <p className={classes.data}>55%</p>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} xl={4}>
        <p className={classes.heading}>Visibility</p>
        <p className={classes.data}>1km</p>
      </Grid>
    </Grid>
  );
}
