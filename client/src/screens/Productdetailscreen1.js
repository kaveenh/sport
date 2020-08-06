import React, { Component } from "react";
import Cricketgloves from '../components/ProductDetails1';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";
import ProductDetails1 from "../components/ProductDetails1";


class Productdetailscreen1 extends Component {
  
  
  render() {
    
    return (
      <div className = "background">
      <div>
      <Appnavbar></Appnavbar>
      </div>

      <ProductDetails1></ProductDetails1>

      <Footer></Footer>



      </div>
    );
  }
}
export default Productdetailscreen1;