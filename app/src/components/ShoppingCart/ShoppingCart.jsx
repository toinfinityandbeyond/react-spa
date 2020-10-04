import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./ShoppingCart.css";
// eslint-disable-next-line
class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="shopping-cart">
        <i className="fa fa-shopping-cart icon" />
        {this.props.ShoppingCart.count ? (
          <div className="items">{this.props.ShoppingCart.count}</div>
        ) : (
          <div className="items">&nbsp;</div>
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  ShoppingCart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ShoppingCart: state.ShoppingCart,
});

export default connect(mapStateToProps)(ShoppingCart);
