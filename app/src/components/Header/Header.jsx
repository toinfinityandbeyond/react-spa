import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

import AppBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

require("./Header.css");

const Header = () => (
  <Container fluid className="header">
    <Row>
      <Container>
        <Row
          lg={{ cols: 2 }}
          md={{ cols: 2 }}
          sm={{ cols: 1 }}
          xs={{ cols: 1 }}
        >
          <Col lg="2" md="4">
            <Link to="/">
              <Image
                className="logo"
                src="logo.png"
                alt="Compra los mejores móviles"
              />
            </Link>
          </Col>
          <Col
            lg={{ offset: 9, span: 1 }}
            md={{ offset: 7, span: 1 }}
            className="text-center"
          >
            <ShoppingCart />
          </Col>
        </Row>
        <Row>
          <Col className="breadcrumbs">
            <AppBreadcrumbs />
          </Col>
        </Row>
      </Container>
    </Row>
  </Container>
);

export default Header;
