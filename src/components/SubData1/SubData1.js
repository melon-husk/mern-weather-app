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
    marginTop: "10px",
    padding: "8px",
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
        <div>
          <p
            style={{
              color: "#E4E4E4",
              fontWeight: "500",
              fontSize: "1rem",
              margin: "0",
              padding: "0px 0px 5px 0px",
            }}
          >
            Wind
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              margin: "0",
            }}
          >
            33 m/s
          </p>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} xl={4}>
        <div>
          <p
            style={{
              color: "#E4E4E4",
              fontWeight: "500",
              fontSize: "1rem",
              margin: "0",
              padding: "0px 0px 5px 0px",
            }}
          >
            Humidity
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              margin: "0",
            }}
          >
            55%
          </p>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} xl={4}>
        <div>
          <p
            style={{
              color: "#E4E4E4",
              fontWeight: "500",
              fontSize: "1rem",
              margin: "0",
              padding: "0px 0px 5px 0px",
            }}
          >
            Visibility
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              margin: "0",
            }}
          >
            1km
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
