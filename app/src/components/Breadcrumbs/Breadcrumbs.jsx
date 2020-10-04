import React from "react";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";

import { HashRouter as Router } from "react-router-dom";

require("./Breadcrumbs.css");

const routesList = {
  "/": "Product List",
  "/:name": null,
  "/:name/:id": (url, match) => `${match[":name"].replace(/-/g, " ")}`,
};

export default class AppBreadcrumbs extends React.Component {
  render() {
    return (
      <Router>
        <Breadcrumbs
          mappedRoutes={routesList}
          WrapperComponent={(props) => (
            <ol className="breadcrumb">{props.children}</ol>
          )}
          ActiveLinkComponent={(props) => (
            <li className="breadcrumb-item active">{props.children}</li>
          )}
          LinkComponent={(props) => (
            <li className="breadcrumb-item">{props.children}</li>
          )}
        />
      </Router>
    );
  }
}
