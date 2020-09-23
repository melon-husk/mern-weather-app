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
import axios from "axios";
const useStyles = makeStyles({
  items: {
    margin: "0px 0px 0px 0px",
    borderRadius: "12px",
    textAlign: "center",
  },
  rounded: {
    borderRadius: "12px",
  },
});

function App() {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [showTempInC, setShowTempInC] = useState(true);

  let sm = 12;
  let smItem = 6;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    axios
      .post("http://192.168.0.130:5000/api/get_data", {
        lat: Number(20.92),
        lng: Number(77.75),
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading</div>;
  }
  if (width < 900 && width > 900) {
    sm = 12;
    smItem = 6;
  } else if (width < 900) {
    smItem = 12;
  }
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Grid item xs={12} sm={sm} lg={10} xl={10} className={classes.items}>
          <StylesProvider injectFirst>
            <SearchBar setData={setData} />
          </StylesProvider>
        </Grid>
        <Grid item xs={12} sm={smItem} lg={5} xl={5} className={classes.items}>
          <WeatherBox
            data={data}
            setShowTempInC={setShowTempInC}
            showTempInC={showTempInC}
          />
          <SubData1 data={data} />
          <SubData2 data={data} showTempInC={showTempInC} />
          <WeekDays data={data} showTempInC={showTempInC} />
        </Grid>
        <Grid item xs={12} sm={smItem} lg={5} xl={5} className={classes.items}>
          <DayHours data={data} showTempInC={showTempInC} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
