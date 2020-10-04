import axios from "axios";
import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

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
      <div className="title">
        <h1>{`${properties.model}`}</h1>
        <h3>{`${properties.brand}`}</h3>
      </div>
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
        <div>
          {colors ? (
            <Form.Group controlId="exampleForm.colors">
              <Form.Label>Colors</Form.Label>
              <Form.Control as="select">
                {colors.map((color) => (
                  <option key={color.code}>{color.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          ) : null}
          {storages ? (
            <Form.Group controlId="exampleForm.colors">
              <Form.Label>Storages</Form.Label>
              <Form.Control as="select">
                {storages.map((storage) => (
                  <option key={storage.code}>{storage.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          ) : null}
        </div>
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
            <Col>
              <div className="left">
                <img
                  width="100%"
                  alt={properties.model}
                  src={properties.imgUrl}
                />
              </div>
            </Col>
            <Col>
              <Form className="right">
                {this.renderTitle(properties)}
                {this.renderProperties(properties)}
                {this.renderOptions(properties)}
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
