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
  timeNow: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    margin: "0",
    padding: "5px 0px",
  },
});
export default function SubData2(props) {
  const [dewPointC, setDewPointC] = useState();
  const [dewPointF, setDewPointF] = useState();
  const [uvIndex, setUvIndex] = useState();
  const [pressure, setPressure] = useState();
  const classes = useStyles();

  useEffect(() => {
    setDewPointC(`${Math.round(props.data.current.dew_point)}°C`);
    setDewPointF(`${Math.round(props.data.current.dew_point * 1.8 + 32)}°F`);
    setUvIndex(props.data.current.uvi);
    setPressure(`${props.data.current.pressure} hPa`);
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
          <div style={{ cursor: "pointer" }}>
            <p className={classes.heading}>Dew Point</p>
            <p className={classes.data}>
              {props.showTempInC ? dewPointC : dewPointF}
            </p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <div>
            <p className={classes.heading}>UV Index</p>
            <p className={classes.data}>{uvIndex}</p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <div>
            <p className={classes.heading}>Pressure</p>
            <p className={classes.data}>{pressure}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
