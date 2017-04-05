var React = require('react');
var Render = require('react-dom').render;
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react.js');
var QubitReact = require('qubit-react/wrapper'); 

// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

// Render FluxCartApp Controller View
Render(
	(<QubitReact id='app-demo-wrapper'>
  		<FluxCartApp />
  	</QubitReact>),
  	document.getElementById('flux-cart')
);
