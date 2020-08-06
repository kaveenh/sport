import React, { Component } from 'react'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import ToggleDisplay from 'react-toggle-display';
import Alert from 'react-bootstrap/Alert';
import {Link} from "react-router-dom";

class CustomBatOrder extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
        baseModel:"",
        sweetSpot:"",
        size:"",
        weight:"",
        spineProfile:"",
        edgeWidth:"",
        handleType:"",
        gripColour:"",
        toeGuard:"",
        finishing:"",
        notes:"",
    
        price:"",
        error:"",
        firstName:"",
        lastName:"",
        address:"",
        phoneNo:"",
        orderNotes:"",
        show:false,
        paymentmethod:"",
        

        cardno:"",
        expirydate:"",
        cardcode:""
        
        
        
          
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
      customizeHandler = () =>{

        return{
    
          baseModel:this.state.baseModel,
        sweetSpot:this.state.sweetSpot,
        size:this.state.size,
        weight:this.state.weight,
        spineProfile:this.state.spineProfile,
        edgeWidth:this.state.edgeWidth,
        handleType:this.state.handleType,
        gripColour:this.state.gripColour,
        toeGuard:this.state.toeGuard,
        finishing:this.state.finishing,
        notes:this.state.notes,
        email:this.props.login.email,
        price:this.state.price,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        address:this.state.address,
        phoneNo:this.state.phoneNo,
        orderNotes:this.state.orderNotes,
        paymentmethod:this.state.paymentmethod,
       

        cardno:this.state.cardno,
        expirydate:this.state.expirydate,
        cardcode:this.state.cardcode




        
    
        }
    
    
      }
      sendCustomizeData = (data) => {
        this.props.socket.emit("SubmitBat",data)
        console.log(this.props.socket)
      }

      onSubmit = (e) => {

    
        this.sendCustomizeData(this.customizeHandler());
        this.setState({ error: <Alert variant="success container mt-2">
        <Alert.Heading>Your Order was placed Successfully</Alert.Heading><Link to="/">Go back to homepage</Link>
        
        
        
      </Alert> })
        
      }
      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }

componentDidMount(){
    
    this.setState({
        baseModel:this.props.custombat.baseModel,
        sweetSpot:this.props.custombat.sweetSpot,
        size:this.props.custombat.size,
        weight:this.props.custombat.weight,
        spineProfile:this.props.custombat.spineProfile,
        edgeWidth:this.props.custombat.edgeWidth,
        handleType:this.props.custombat.handleType,
        gripColour:this.props.custombat.gripColour,
        toeGuard:this.props.custombat.toeGuard,
        finishing:this.props.custombat.finishing,
        notes:this.props.custombat.notes,
        price:this.props.custombat.price,
    })
}

    render(){
      const { isActive } = this.state;
      
        return(
            <div>
              <div className = "mt-2 mb-4" style = {{backgroundColor:"#F0F0F0",textAlign:"center"}}><h2>CHECKOUT</h2></div>
                <div style = {{display:"flex"}}>
            <div >
                <h4>Billing Details * </h4><br></br>
                <div className = "ml-4">
                <div className= "row">
                  <div className = "mr-5">
                <input style = {{marginLeft:"15px"}} name = "firstName" onChange={e => this.onChange(e)} value={this.state.firstName}  className="form-control input-lg" placeholder="First Name" tabindex="4" />
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
        <div className = 'container col-md-3 border mb-4' style = {{marginTop:"0",marginRight:"100px"}}>
          <h4>Your Order</h4><br></br>
        Base Model :  <a>  <strong> {this.state.baseModel}</strong> </a><br></br>
        Sweet Spot : <a>  <strong> {this.state.sweetSpot}</strong> </a><br></br>
        Size : <a>  <strong> {this.state.size}</strong> </a><br></br>
         Weight : <a> <strong>  {this.state.weight}</strong> </a><br></br>
         Spine Profile : <a>  <strong> {this.state.spineProfile}</strong> </a><br></br>
         Edge Width : <a> <strong>  {this.state.edgeWidth}</strong> </a><br></br>
         Handle Type : <a> <strong>  {this.state.handleType}</strong> </a><br></br>
         Grip Color : <a>  <strong> {this.state.gripColour} </strong></a><br></br>
         Toe Guard : <a> <strong> {this.state.toeGuard} </strong></a><br></br>
        Finishing :  <a> <strong>  {this.state.finishing} </strong></a><br></br>
         Notes : <a>  <strong> {this.state.notes} </strong></a><br></br>
         <hr  />
        Total :  <a style = {{marginLeft:"210px"}}> <strong>  {this.state.price} </strong></a><br></br>
        <h4 className = "mt-2 mb-2" >Please select your Payment method:</h4>

        {/* <input   onChange={e => this.onChange(e)} value={this.state.paymentmethod}  type="radio"  name="cashondelivery"/> Cash on Delivery    
        <input  onClick={ () => this.handleClick() }  onChange={e => this.onChange(e)} value={this.state.paymentmethod} className = "ml-4"type="radio" name="cardpayment"/> Credit/Debit Card */}

<div class="control">
  <label class="radio mr-5">
    <input onClick={ () => this.handleClick2() } onChange={e => this.onChange(e)} value={this.state.paymentmethod} type="radio" name="paymentmethod" value = "cashondelivery"/>
    <span><strong>Cash on Delivery</strong></span>
  </label>
  <label class="radio">
    <input onClick={ () => this.handleClick() } onChange={e => this.onChange(e)} value={this.state.paymentmethod} type="radio" name="paymentmethod" value = "cardpayment" />
    <span><strong>Credit/Debit card</strong></span>
  </label>
</div>
       
  
        <ToggleDisplay show={this.state.show}>
         <div className = "mb-4" style = {{backgroundColor : "#F0F0F0"}}> 
           <p>Card Number*</p>
           <input  onChange={e => this.onChange(e)} value={this.state.cardno} name = "cardno" maxLength = "16" className="form-control input-lg" placeholder="1234123412341234" tabindex="4" />

           <p>Expiry Date*</p>
           <input  onChange={e => this.onChange(e)} value={this.state.expirydate} name = "expirydate" maxLength = "5" className="form-control input-lg" placeholder="MM/YY" tabindex="4" />

           <p>Card Code(CVC)*</p>
           <input  onChange={e => this.onChange(e)} value={this.state.cardcode} name = "cardcode" maxLength = "3" className="form-control input-lg" placeholder="CVC" tabindex="4" /><br></br>
           

         </div>
        </ToggleDisplay>
        <div className = "mt-4">
        <p><span><strong>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </strong></span></p>
<span className="button-checkbox mb-4">
                      <button type="button" className="btn mb-4" data-color="info" tabindex="7"><input type="checkbox"  name="tAndC" id="t_and_c" className="hidden" value="1" />  I have read and agree to the website terms and conditions * </button>

                    </span>          
        </div>
        <button type="button" onClick={(e) => { this.onSubmit(e) }} className="btn btn-primary mb ml-5">Place Order <span class="glyphicon glyphicon-shopping-cart"></span></button>
            <div style = {{color:"red"}}>
                {this.state.error}

            </div>

        
        </div>
        </div>
        
       
       
        </div>
        
        )

        
    }
}

const mapStateToProps = (state) => {
    return{
      login:state.login,
      custombat:state.custombat
    }
  }

  
  export default withRouter(connect(mapStateToProps, null)(CustomBatOrder)); 
  