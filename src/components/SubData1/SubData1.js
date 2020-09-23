import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    borderRadius: "12px",
    background: "black",
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
    marginTop: "10px",
    padding: "8px",
    height: "70px",
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
export default function SubData1(props) {
  const [windSpeed, setWindSpeed] = useState();
  const [humidity, setHumidity] = useState();
  const [visibility, setVisibility] = useState();
  const classes = useStyles();

  useEffect(() => {
    setWindSpeed(`${props.data.current.wind_speed} m/s`);
    setHumidity(`${props.data.current.humidity}%`);
    setVisibility(`${Math.round(props.data.current.visibility / 1000)} km`);
  }, [props.data]);

  return (
    <div style={{ margin: "10px 10px 0px 10px" }}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <p className={classes.heading}>Wind</p>
          <p className={classes.data}>{windSpeed}</p>
        </Grid>
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <p className={classes.heading}>Humidity</p>
          <p className={classes.data}>{humidity}</p>
        </Grid>
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <p className={classes.heading}>Visibility</p>
          <p className={classes.data}>{visibility}</p>
        </Grid>
      </Grid>
    </div>
  );
}
