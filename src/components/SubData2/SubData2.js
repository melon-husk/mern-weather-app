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
  timeNow: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    margin: "0",
    padding: "5px 0px",
  },
});
export default function SubData2() {
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
        <div>
          <p className={classes.heading}>Dew Point</p>
          <p className={classes.data}>25°</p>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} xl={4}>
        <div>
          <p className={classes.heading}>UV Index</p>
          <p className={classes.data}>13</p>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} xl={4}>
        <div>
          <p className={classes.heading}>Pressure</p>
          <p className={classes.data}>12hPa</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} xl={12}>
        <p className={classes.timeNow}>12:00 AM</p>
      </Grid>
    </Grid>
  );
}
