var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var FluxProduct = require('./FluxProduct.react.js');
var FluxCart = require('./FluxCart.react.js');
var QubitReact = require('qubit-react/wrapper'); 

// Method to retrieve state from Stores
function getCartState() {
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

// Define main Controller View
var FluxCartApp = React.createClass({

  // Get initial state from stores
  getInitialState: function () {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function () {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function () {
    return (
      <div className="flux-cart-app">
        <QubitReact id='cart-wrapper' products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal}
                  visible={this.state.cartVisible}>
          <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal}
                  visible={this.state.cartVisible}/>
        </QubitReact>
        <QubitReact id='product-wrapper' product={this.state.product} cartitems={this.state.cartItems}
                     selected={this.state.selectedProduct}>
          <FluxProduct product={this.state.product} cartitems={this.state.cartItems}
                     selected={this.state.selectedProduct}/>
        </QubitReact>
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function () {
    this.setState(getCartState());
  }

});

module.exports = FluxCartApp;
