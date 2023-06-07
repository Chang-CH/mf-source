import React from "react";
import ReactDOM from "react-dom";
import VueMount from "./VueMount";
import {ReactButton} from "reactButton/ReactButton"

import "./index.css";
const App = () => {
  return (<div className="container">
  <div className="container">
    <h1>Container App</h1>
    <VueMount/>
    <ReactButton /> // Micro frontend app
  </div>
  </div>)
};
ReactDOM.render(<App />, document.getElementById("app"));
