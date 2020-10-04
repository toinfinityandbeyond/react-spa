import axios from "axios";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import * as Utils from "../../utils/utils";

require("./Product.css");

class Product extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = { id, properties: {} };
  }

  componentDidMount() {
    const { id } = this.state;
    Utils.cachedFetch(
      `https://front-test-api.herokuapp.com/api/product/${id}`,
      {
        method: "get",
        seconds: 3600,
      }
    ).then((response) => {
      response
        .clone()
        .json()
        .then((content) => {
          this.setState({ properties: content });
        });
    });
  }

  addToCart(event) {
    event.preventDefault();
    const { colors, storages, id } = event.target.elements;
    if (colors && storages && id) {
      axios
        .post(`https://front-test-api.herokuapp.com/api/cart`, {
          id: id.value,
          colorCode: colors.value,
          storageCode: storages.value,
        })
        .then((response) => {
          console.log(response);
        });
    }
  }

  renderTitle(properties) {
    if (properties) {
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

    return null;
  }

  renderAddToCart() {
    return (
      <Button size="lg" type="submit" className="add-to-cart pull-right">
        Add to cart
      </Button>
    );
  }

  renderProperties(properties) {
    if (properties) {
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

    return null;
  }

  renderOptions(properties) {
    if (properties && properties.options) {
      const { colors, storages } = properties.options;
      return (
        <Container>
          <Row>
            {colors ? (
              <Col>
                <Form.Group name="color" id="color" controlId="colors">
                  <Form.Label>Colors</Form.Label>
                  <Form.Control as="select">
                    {colors.map((color) => (
                      <option key={color.code} value={color.code}>
                        {color.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            ) : null}
            {storages ? (
              <Col>
                <Form.Group name="storage" id="storage" controlId="storages">
                  <Form.Label>Storages</Form.Label>
                  <Form.Control as="select">
                    {storages.map((storage) => (
                      <option key={storage.code} value={storage.code}>
                        {storage.name}
                      </option>
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
    const { properties, id } = this.state;
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
              <Form onSubmit={this.addToCart} className="right">
                <Form.Control type="hidden" name="id" value={id} />
                {this.renderTitle(properties)}
                {this.renderProperties(properties)}
                {this.renderOptions(properties)}
                {this.renderAddToCart()}
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }
    return null;
  }
}

Product.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Product;
