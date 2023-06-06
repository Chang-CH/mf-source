import React from "react";
import ReactDOM from "react-dom";
import { VueButton } from 'vueButton/VueButton';

import "./index.css";

const App = () => (
  <div className="container">
  <div className="container">
    <h1>Container App</h1>
    <VueButton /> // Micro frontend app
  </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
