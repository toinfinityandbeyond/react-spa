import React from "react";

require("./ShoppingCart.css");
// eslint-disable-next-line
export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="shopping-cart">
        <i className="fa fa-shopping-cart icon" />
      </div>
    );
  }
}
