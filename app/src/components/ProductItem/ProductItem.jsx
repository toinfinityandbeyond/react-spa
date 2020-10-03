import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

require("./ProductItem.css");

class ProductItem extends Component {
  render() {
    const { info } = this.props;

    return (
      <Link to={`/${info.id}`} id={info.id}>
        <div className="product-item" key={`${info.id}`}>
          <img className="image" alt={`${info.model}`} src={`${info.imgUrl}`} />
          <p>{`${info.model}`}</p>
          <small>{`${info.brand}`}</small>
          <p>{`${info.price}`}€</p>
        </div>
      </Link>
    );
  }
}

ProductItem.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ProductItem;
