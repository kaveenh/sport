import React, { Component } from "react";
import Cricketselectioncards from '../components/Cricketselectioncards.js';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";


class Customizescreen extends Component {
  
  
  render() {
    
    return (
      <div>
      <div>
      <Appnavbar></Appnavbar>
      </div>

      <Cricketselectioncards></Cricketselectioncards>

      <Footer></Footer>



      </div>
    );
  }
}
export default Customizescreen;