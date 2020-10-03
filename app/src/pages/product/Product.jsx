import axios from "axios";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

require("./Product.css");

class Product extends Component {
  constructor(props) {
    super(props);

    const { id } = props.match.params;
    this.state = { id, product: {} };
  }

  componentDidMount() {
    axios
      .get(`https://front-test-api.herokuapp.com/api/product/${this.state.id}`)
      .then((response) => {
        this.setState({ product: response.data });
      });
  }

  render() {
    console.log("product", this.state.product);
    return <Container className="product">HOLA {`${this.state.id}`}</Container>;
  }
}

export default Product;
