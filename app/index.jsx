import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import reducers from "./reducers";
import App from "./App";
import "./plugins/highlight/atom-one-dark.css";
import "./styles.css";

const store = createStore(reducers);

render(<App store={store} />, document.getElementById("root"));
