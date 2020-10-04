import React, { Component } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

import ProductItem from "../../components/ProductItem/ProductItem";
import * as Utils from "../../utils/utils";
import "./ProductList.css";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({ link: window.location.hash.replace("#", "") });
  }

  componentDidMount() {
    Utils.cachedFetch(`https://front-test-api.herokuapp.com/api/product`, {
      method: "get",
      seconds: 3600,
    }).then((response) => {
      response
        .clone()
        .json()
        .then((content) => {
          this.setState({ products: content, allProducts: content });
        });
    });
  }
  handleChange(event) {
    const text = event.target.value;
    if (text.length) {
      const products = this.state.allProducts.filter((product) => {
        return (
          product.brand.toLowerCase().includes(text.toLowerCase()) ||
          product.model.toLowerCase().includes(text.toLowerCase())
        );
      });
      this.setState({ products });
    } else {
      this.setState({ products: this.state.allProducts });
    }
  }

  renderSearch() {
    return (
      <Col>
        <Form>
          <Form.Group
            as={Col}
            md="4"
            className="pull-right"
            controlId="validationFormikUsername"
          >
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">Search</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Search..."
                aria-describedby="inputGroupPrepend"
                name="search"
                onChange={this.handleChange}
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Col>
    );
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
        <Row>{this.renderSearch()}</Row>
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
