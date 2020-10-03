import { Container, Row } from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";
import Header from "./layout/Header";
import ProductList from "./pages/productlist/ProductList";
import menu from "../menu";

require("./Main.css");

const Main = (props) => {
  return (
    <Container className="main" fluid>
      <Row>
        <Header title="404 - Not Found" description="Page not found" />
        <ProductList handleLink={props.handleLink} />
      </Row>
    </Container>
  );
};

export default Main;
