import React, { Component } from "react";
import PropTypes from "prop-types";

require("./ProductItem.css");

class ProductItem extends Component {
  goToProduct() {
    const { info } = this.props;
  }
  render() {
    const { info } = this.props;
    return (
      <div className="product-item" key={`${info.id}`}>
        <img className="image" alt={`${info.model}`} src={`${info.imgUrl}`} />
        <p>{`${info.model}`}</p>
        <small>{`${info.brand}`}</small>
      </div>
    );
  }
}

ProductItem.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ProductItem;
