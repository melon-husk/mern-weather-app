import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import { StylesProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  items: {
    margin: "10px",
    borderRadius: "12px",
    textAlign: "center",
  },
  rounded: {
    borderRadius: "12px",
  },
});
function App() {
  const classes = useStyles();
  const [name, setName] = useState(null);
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={12} sm={10} lg={8} xl={8} className={classes.items}>
          <StylesProvider injectFirst>
            <SearchBar />
          </StylesProvider>
        </Grid>
        <Grid item xs={6} sm={5} lg={4} xl={4} className={classes.items}>
          <p>First</p>
        </Grid>
        <Grid item xs={6} sm={5} lg={4} xl={4} className={classes.items}>
          <p>Second</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
