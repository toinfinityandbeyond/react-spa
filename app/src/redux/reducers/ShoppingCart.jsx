function ShoppingCart(state = {
  count: 0
}, action) {
  switch (action.type) {
    case 'ShoppingCart_add':
      return Object.assign({}, state, {
        count: action.value
      });

    default:
      return state;
  }
}

export default ShoppingCart;
