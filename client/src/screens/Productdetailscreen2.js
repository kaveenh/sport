import React, { Component } from "react";
import Cricketgloves from '../components/ProductDetails1';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";
import ProductDetails2 from "../components/ProductDetails2";


class Productdetailscreen2 extends Component {
  
  
  render() {
    
    return (
      <div className = "background">
      <div>
      <Appnavbar></Appnavbar>
      </div>

      <ProductDetails2></ProductDetails2>

      <Footer></Footer>



      </div>
    );
  }
}
export default Productdetailscreen2;