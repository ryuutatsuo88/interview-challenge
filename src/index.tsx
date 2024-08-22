import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "src/styles/custom-bootstrap.scss";
import "src/styles/index.scss";
import App from "./components/App";

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
