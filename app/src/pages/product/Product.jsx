import axios from "axios";
import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

require("./Product.css");

class Product extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    const { id } = props.match.params;
    this.state = { id, properties: {} };
  }

  componentDidMount() {
    axios
      .get(`https://front-test-api.herokuapp.com/api/product/${this.state.id}`)
      .then((response) => {
        console.log("response", response.data);
        this.setState({ properties: response.data });
      });
  }

  renderTitle(properties) {
    return (
      <Container className="title">
        <Row>
          <Col lg={9}>
            <h1>{`${properties.model}`}</h1>
            <h3>{`${properties.brand}`}</h3>
          </Col>
          {properties.price ? (
            <Col lg={3}>
              <h1>{properties.price} €</h1>
            </Col>
          ) : null}
        </Row>
      </Container>
    );
  }

  renderAddToCart(properties) {
    return (
      <Button size="lg" className="add-to-cart pull-right">
        Add to cart
      </Button>
    );
  }

  renderProperties(properties) {
    return (
      <ul className="properties">
        <li>
          <b>Dimentions:</b> {properties.dimentions}
        </li>
        <li>
          <b>CPU:</b> {properties.cpu}
        </li>
        <li>
          <b>RAM:</b> {properties.ram}
        </li>
        <li>
          <b>Battery:</b> {properties.battery}
        </li>
        <li>
          <b>Operative System:</b> {properties.os}
        </li>
        <li>
          <b>Resolution:</b> {properties.displayResolution}
        </li>
        <li>
          <b>Weight:</b> {properties.weight}
        </li>
        <li>
          <b>Cameras:</b>
          <ul>
            <li>{properties.primaryCamera}</li>
            <li>{properties.secondaryCmera}</li>
          </ul>
        </li>
      </ul>
    );
  }

  renderOptions(properties) {
    if (properties.options) {
      const { colors, storages } = properties.options;
      return (
        <Container>
          <Row>
            {colors ? (
              <Col>
                <Form.Group controlId="exampleForm.colors">
                  <Form.Label>Colors</Form.Label>
                  <Form.Control as="select">
                    {colors.map((color) => (
                      <option key={color.code}>{color.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            ) : null}
            {storages ? (
              <Col>
                <Form.Group controlId="exampleForm.colors">
                  <Form.Label>Storages</Form.Label>
                  <Form.Control as="select">
                    {storages.map((storage) => (
                      <option key={storage.code}>{storage.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            ) : null}
          </Row>
        </Container>
      );
    }
    return null;
  }

  render() {
    const { properties } = this.state;
    if (Object.values(properties).length) {
      return (
        <Container className="product">
          <Row
            lg={{ cols: 2 }}
            md={{ cols: 2 }}
            sm={{ cols: 1 }}
            xs={{ cols: 1 }}
          >
            <Col className="left" lg={4}>
              <img
                width="100%"
                alt={properties.model}
                src={properties.imgUrl}
              />
            </Col>
            <Col lg={8}>
              <Form className="right">
                {this.renderTitle(properties)}
                {this.renderProperties(properties)}
                {this.renderOptions(properties)}
                {this.renderAddToCart(properties)}
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }
    return null;
  }
}

export default Product;
