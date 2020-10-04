import React, { Component } from "react";

import { Container, Row } from "react-bootstrap";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./src/layout/Header";
import ProductList from "./src/pages/productlist/ProductList";
import Product from "./src/pages/product/Product";

const routes = [
  { id: 1, path: `/`, name: `Product List`, ComponentRender: ProductList },
  { id: 2, path: `/:id`, name: `Product`, ComponentRender: Product },
];
class App extends Component {
  render() {
    return (
      <Router>
        <Header routes={routes} />
        <Container className="main" fluid>
          <Row>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/:name/:id" component={Product} />
            </Switch>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
