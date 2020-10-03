import axios from "axios";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import ProductItem from "../../components/ProductItem/ProductItem";

require("./ProductList.css");

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    this.setState({ link: window.location.hash.replace("#", "") });
  }

  componentDidMount() {
    axios
      .get(`https://front-test-api.herokuapp.com/api/product`)
      .then((response) => {
        this.setState({ products: response.data });
      });
  }
  renderItems() {
    const { products } = this.state;
    return products.map((product) => (
      <Col key={product.id}>
        <ProductItem info={product} />
      </Col>
    ));
  }
  render() {
    return (
      <Container className="product-list">
        <Row
          lg={{ cols: 4 }}
          md={{ cols: 3 }}
          sm={{ cols: 2 }}
          xs={{ cols: 1 }}
        >
          {this.renderItems()}
        </Row>
      </Container>
    );
  }
}

export default ProductList;
