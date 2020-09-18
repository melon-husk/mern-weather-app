import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { StylesProvider } from "@material-ui/core/styles";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import SubData1 from "./components/SubData1/SubData1";
import SubData2 from "./components/SubData2/SubData2";
import WeekDays from "./components/WeekDays/WeekDays";
import DayHours from "./components/DayHours/DayHours";

const useStyles = makeStyles({
  items: {
    margin: "0px 0px 0px 0px",
    borderRadius: "12px",
    textAlign: "center",
  },
  rounded: {
    borderRadius: "12px",
  },
  branding: {
    height: "32px",
    fontFamily: "Lobster",
    fontSize: "1.5rem",
    color: "white",
    marginBottom: "1px",
  },
});

function App() {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  let sm = 12;
  let smItem = 6;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  if (width < 890 && width > 855) {
    sm = 12;
    smItem = 6;
  } else if (width < 855) {
    smItem = 12;
  }
  return (
    <div style={{ padding: "10px" }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={1}
      >
        <Grid item xs={12} sm={sm} lg={10} xl={10} className={classes.items}>
          <StylesProvider injectFirst>
            <SearchBar />
          </StylesProvider>
        </Grid>
        <Grid item xs={12} sm={smItem} lg={5} xl={5} className={classes.items}>
          <WeatherBox />
          <SubData1 />
          <SubData2 />
          <WeekDays />
        </Grid>
        <Grid item xs={12} sm={smItem} lg={5} xl={5} className={classes.items}>
          {/* <div className={classes.branding}>Made With React</div> */}
          <DayHours />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
