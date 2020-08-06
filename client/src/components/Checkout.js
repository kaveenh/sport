import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NumberFormat from 'react-number-format';
import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import ToggleDisplay from 'react-toggle-display';
import Alert from 'react-bootstrap/Alert';
import { withRouter } from "react-router-dom";



import { updateCart } from '../redux/actions/CartActions';



class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName:"",
        lastName:"",
        address:"",
        phoneNo:"",
        orderNotes:"",
        show:false,
        paymentmethod:"",
        

        cardno:"",
        expirydate:"",
        cardcode:"",
        prodquant:"",
        prodname:"",
        prodprice:"",
        tot:"",

        error:""
        
        
        
          
        };
      }
      handleClick() {
        this.setState({
          show: !this.state.show
        });
      }
      handleClick2() {
        this.setState({
          show: false,
          cardcode:"",
          cardno:"",
        expirydate:""

        });
      }
      orderhandler = () =>{
        
        return{
    
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          address:this.state.address,
          phoneNo:this.state.phoneNo,
          orderNotes:this.state.orderNotes,
          paymentmethod:this.state.paymentmethod,
          cardno:this.state.cardno,

          expirydate:this.state.expirydate,
          cardcode:this.state.cardcode,
          
          prodquant:this.state.prodquant,
          
          prodname:this.state.prodname,
          prodprice:this.state.prodprice,
          tot:this.state.tot
          


                }
      }
      sendorder = (data) => {
        this.props.socket.emit("Order",data)
        console.log(this.props.socket)
      }

      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }

      onSubmit = (e) => {
        
        e.preventDefault();
        this.sendorder(this.orderhandler());
        localStorage.clear()
        
        
        this.setState({ error: <Alert variant="success container mt-2">
        <Alert.Heading>Your Order was placed Successfully</Alert.Heading>
      <Link to="/">Go back to homepage</Link>
        
        
        
        
        
      </Alert> })
      
        
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
  componentDidMount(props) {
    this.getCart();
    
    
  }
  updateCartItemQuantity(index, quantity) {
    var currentCart = this.props.cart;

    // Update the quantity if above zero, otherwise, delete the row
    if(quantity > 0) {
      currentCart.count = currentCart.count - (currentCart.items[index].quantity-quantity);
      currentCart.items[index].quantity = quantity;
    }
    else {
      currentCart.count = currentCart.count - currentCart.items[index].quantity;
      currentCart.items.splice(index, 1);
    }

    this.setState({ cart: currentCart });

    // loop through all the items and recalculate total
    currentCart.total = 0.00;

    for(var item in this.props.cart.items) {
      currentCart.total = currentCart.total + (this.props.cart.items[item].price * this.props.cart.items[item].quantity);
    }

    // Dispatch to the store
    this.props.setCart(currentCart);

    // Add to localstorage so we persist the cart
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }
  render() {
    // Only show products in the cart if there are any
    if(this.props.cart.count > 0) {
      return(
        
        <div>
          <div className = "mt-2 mb-4" style = {{backgroundColor:"#F0F0F0",textAlign:"center"}}><h2>CHECKOUT</h2></div>
          <div style = {{display:"flex"}}>
          <div className = "ml-5" >
                <h4>Billing Details * </h4><br></br>
                <div className = "ml-4">
                <div className= "row">
                  <div className = "mr-5">
                <input style = {{marginLeft:"15px"}}  name = "firstName" onChange={e => this.onChange(e)} value={this.state.firstName}  className="form-control input-lg" placeholder="First Name" tabindex="4" />
                </div>
                <div className = "mb-4">
                <input name = "lastName" onChange={e => this.onChange(e)} value={this.state.lastName} className="form-control input-lg" placeholder="Last Name" tabindex="4" />
                </div>
                </div>
                <textarea name= "address" onChange={e => this.onChange(e)} value={this.state.address} rows="3" cols = "1" className="form-control input-lg mb-4" placeholder="Address" tabindex="4" />
                <input name = "phoneNo" onChange={e => this.onChange(e)} value={this.state.phoneNo}  className="form-control input-lg mb-4 col-4" placeholder="Phone No" tabindex="4" />
                <textarea name = "orderNotes" onChange={e => this.onChange(e)} value={this.state.orderNotes} className="form-control input-lg mb-4 col-5 row-5" placeholder="Order Notes" tabindex="4" />
                </div>
                

            </div>
        <div className = 'container col-md-4 border mb-4 mt-4' style = {{marginTop:"0",marginRight:"100px"}}>
          <table>
            <thead>
              <tr>
              <th>Quantity</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.items.map((product, index) =>
              <tr key={product.id}>
                <td><NumberFormat onChange={e => this.onChange(e)} value={this.state.prodquant = product.quantity} value={product.quantity} displayType="input" allowNegative={false} thousandSeparator={true} isAllowed={(values) => { if(values.value>0){return true}else{return false;} }} onValueChange={(values) => {
                this.updateCartItemQuantity(index, values.floatValue);
                }}/></td>
                <td onChange={e => this.onChange(e)} value={this.state.prodname = product.name} > {product.name} </td>
                <td><NumberFormat onChange={e => this.onChange(e)} value={this.state.prodprice = product.price}   value={product.price} displayType="text" thousandSeparator={true} prefix="Rs" decimalScale={2} /></td>
                <td><Link to="#" onClick={() => { this.updateCartItemQuantity(index, 0) }}>Remove</Link></td>
              </tr>
              )}
              <tr className="total">
                <td></td>
                <td>Total:</td>
                <td><NumberFormat onChange={e => this.onChange(e)} value={this.state.tot = this.props.cart.total} value={this.props.cart.total} displayType="text" thousandSeparator={true} prefix="Rs" decimalScale={2} /></td>
              </tr>
            </tbody>
          </table>
          <h4 style = {{marginTop:"200px"}} className = " mb-2" >Please select your Payment method:</h4>
          <div class="control">
  <label class="radio mr-5">
    <input  onClick={ () => this.handleClick2() } onChange={e => this.onChange(e)} value={this.state.paymentmethod} type="radio" name="paymentmethod" value = "cashondelivery"/>
    <span><strong>Cash on Delivery</strong></span>
  </label>
  <label class="radio">
    <input onClick={ () => this.handleClick() } onChange={e => this.onChange(e)} value={this.state.paymentmethod} type="radio" name="paymentmethod" value = "cardpayment" />
    <span><strong>Credit/Debit Card</strong></span>
  </label>
</div>
<ToggleDisplay show={this.state.show}>
         <div className = "mb-4" style = {{backgroundColor : "#F0F0F0"}}> 
           <p>Card Number*</p>
           <input  onChange={e => this.onChange(e)} value={this.state.cardno} name = "cardno" maxLength = "16" className="form-control input-lg" placeholder="1234123412341234" tabindex="4" />

           <p>Expiry Date*</p>
           <input  onChange={e => this.onChange(e)} value={this.state.expirydate} name = "expirydate" maxLength = "5"  className="form-control input-lg" placeholder="MM/YY" tabindex="4" />

           <p>Card Code(CVC)*</p>
           <input  onChange={e => this.onChange(e)} value={this.state.cardcode} name = "cardcode" maxLength = "3" className="form-control input-lg" placeholder="CVC" tabindex="4" /><br></br>
           

         </div>
        </ToggleDisplay>
        <div className = "mt-4">
        
<span className="button-checkbox mb-4">
<p><span><strong>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </strong></span></p>
                      <button type="button" className="btn mb-4" data-color="info" tabindex="7"><input type="checkbox"  name="tAndC" id="t_and_c" className="hidden" value="1" />  I have read and agree to the website terms and conditions * </button>

                    </span>          
        </div>
        
        <button type="button" onClick={(e) => { this.onSubmit(e) }} className="btn btn-primary mb ml-5">Place Order <span class="glyphicon glyphicon-shopping-cart"></span></button>
            <div>
              {this.state.error}
            </div>
          <p><Link to='/cricket/cricketgloves/glovedetails'> Back to Products</Link></p> 
          
        </div>
        </div>
        </div>
      );
    }
    // Nothing in the cart, so hide it
    else {
      return(
        
        <div className="Cart">
          <h3>There are no items in your cart.</h3>
          <p><Link to= '/'> Back to Homepage</Link></p>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    socket4:state.soc
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCart: updateCart
  }, dispatch);
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));