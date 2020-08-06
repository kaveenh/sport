import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pluralize from 'react-pluralize'
import NumberFormat from 'react-number-format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCart } from '../redux/actions/CartActions';
import ToggleDisplay from 'react-toggle-display';
import Alert from 'react-bootstrap/Alert';



const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCart: updateCart
  }, dispatch);
};

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
    error:""
    }
  }
  componentDidMount(props) {
    this.getCart();
  }

  getCart() {
    // If we don't have any items, check localstorage
    if(this.props.cart.items.length === 0) {
      var localStorageCart = localStorage.getItem('cart');
      if(localStorageCart) {
        this.props.setCart(JSON.parse(localStorageCart));
      }
    }
  }
  
  addToCart(product) {
    this.setState({ error: <Alert variant="success container mt-2">
    <Alert.Heading>You added this item to your cart</Alert.Heading><Link to="/checkout">Go to check out</Link>
    
    
    
  </Alert> })
    var currentCart = this.props.cart;
    var newItem = true;

    // Check cart to see if it's there first, if it is, add to the quantity
    for(var item in currentCart.items) {
      if(currentCart.items[item].name === product.name) {
        currentCart.items[item].quantity++;
        newItem = false;
      }
    }

    if(newItem) {
      currentCart.items.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        price: parseFloat(product.price),
      });
    }
    currentCart.count = currentCart.count+1;
    currentCart.total = parseFloat(currentCart.total) + parseFloat(product.price);

    // Update redux store
    this.props.setCart(currentCart);

    // Add to localstorage so we persist the cart
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }
  render() {
    const { ...props } = this.props;
    // This is the cart button you see next to each product
    if(props.addCartButton === 'true') {
      return(
        <span className="cart-add">
            <button class="btn btn-primary mb ml-5" type = "button"onClick={() => this.addToCart(this.props.product) } >Add to Cart</button>
            <div style = {{color:"red"}}>
                {this.state.error}

            </div>

        
        </span>
      );
    }
    // Else we show the cart summary used in the header
    else {
      return (
        <div className='cart-box right'>
          
         {/* <div>
         <a href = "/checkout">
         
        
         <img type = "button"class="avatar avatar-128 img-circle img-thumbnail" src={require('./images/cart.png')}></img>
         <span class="counter counter-lg">{this.props.cart.count}</span>
         </a>
         </div> */}

          
          You have <Pluralize singular="item" count={this.props.cart.count} zero={'nothing'} /> in your cart totalling <NumberFormat value={this.props.cart.total} displayType="text" thousandSeparator={true} prefix="Rs" decimalScale={2} />. <Link to={`/checkout`}>Checkout</Link>
        </div>
        
      );

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
