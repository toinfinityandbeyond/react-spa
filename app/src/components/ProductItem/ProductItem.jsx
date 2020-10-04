import React, { Component } from "react";
import PropTypes from "prop-types";
import slugify from "slugify";
import { Image } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./ProductItem.css";

class ProductItem extends Component {
  render() {
    const { info } = this.props;

    return (
      <Link to={`/${slugify(info.model)}/${info.id}`}>
        <div className="product-item">
          <Image
            width="100%"
            className="image"
            alt={`${info.model}`}
            src={`${info.imgUrl}`}
          />
          <p>{`${info.model}`}</p>
          <small>{`${info.brand}`}</small>
          {info.price ? <p>{`${info.price}`}€</p> : <p>&nbsp;</p>}
        </div>
      </Link>
    );
  }
}

ProductItem.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ProductItem;
