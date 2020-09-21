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
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

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
        lat: Number(20.9),
        lng: Number(77.7),
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
            <SearchBar setData={setData} />
          </StylesProvider>
        </Grid>
        <Grid item xs={12} sm={smItem} lg={5} xl={5} className={classes.items}>
          <WeatherBox data={data} />
          <SubData1 data={data} />
          <SubData2 data={data} />
          <WeekDays data={data} />
        </Grid>
        <Grid item xs={12} sm={smItem} lg={5} xl={5} className={classes.items}>
          {/* <div className={classes.branding}>Made With React</div> */}
          <DayHours data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
