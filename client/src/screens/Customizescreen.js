import React, { Component } from "react";
import Customizebat from '../components/Customizebat.js';
import Appnavbar from "../components/Appnavbar.js";
import Footer from "../components/Footer.js";


class Customizescreen extends Component {
  
  
  render() {
    
    return (
      <div className = "background">
      <Appnavbar></Appnavbar>
      <div>
      <Customizebat></Customizebat>
      </div>
<div className = "mt-4">
      <Footer></Footer>
      </div>
      </div>
    );
  }
}
export default Customizescreen;