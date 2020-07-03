import React from "react";
import ReactDOM from "react-dom";
import { Typography, Box } from "@material-ui/core";

import "./styles.css";

function App() {
  return (
    <Typography variant="h5" component="div">
      This is normal text, but{" "}
      <Box display="inline" fontWeight="fontWeightBold">
        this is bold
      </Box>{" "}
      though
    </Typography>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
