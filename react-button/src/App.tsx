import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { ReactButton } from "./components/ReactButton";

const App = () => (
  <div className="container">
    <ReactButton/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
