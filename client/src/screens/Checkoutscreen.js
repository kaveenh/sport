import React, { Component } from "react";
import Checkout from '../components/Checkout.js';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";


class Checkoutscreen extends Component {
  
  
  render() {
    
    return (
      <div className = "background">
      <div>
      <Appnavbar></Appnavbar>
      </div>
      
      
      <Checkout  socket={this.props.socket}></Checkout>
      
      

      <Footer></Footer>



      </div>
    );
  }
}
export default Checkoutscreen;