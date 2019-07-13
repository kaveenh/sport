import React, { Component } from "react";
import Cricketgloves from '../components/Cricketgloves';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";


class Cricketglovesscreen extends Component {
  
  
  render() {
    
    return (
      <div>
      <div>
      <Appnavbar></Appnavbar>
      </div>

      <Cricketgloves></Cricketgloves>

      <Footer></Footer>



      </div>
    );
  }
}
export default Cricketglovesscreen;