import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
// eslint-disable-next-line
import { expect } from "chai";

import { createStore } from "redux";
import reducers from "../app/reducers";
import App from "../app/App";

const store = createStore(reducers);
// const jsdom = require("mocha-jsdom");

// global.document = jsdom(
//   "<!doctype html><html><body><div id='app'></div></body></html>"
// );

// global.document = jsdom({
//   url: "http://localhost:8080/",
// });

let rootContainer;

// eslint-disable-next-line
beforeEach(() => {
  rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", "root");
  document.body.appendChild(rootContainer);
});
// eslint-disable-next-line
afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});
// eslint-disable-next-line
describe("App Component Testing", () => {
  // eslint-disable-next-line
  it("Renders Hello World Title", () => {
    act(() => {
      render(<App store={store} />, rootContainer);
    });
    // const h1 = rootContainer.querySelector("h1");
    // expect(h1.textContent).to.equal("Hello World");
  });
});
