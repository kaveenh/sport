import React, { Component } from "react";
import CustomBatOrder from '../components/CustomBatOrder.js';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";


class Custombatorderscreen extends Component {
  
  
  render() {
    
    return (
      <div className = "background">
      <div>
      <Appnavbar></Appnavbar>
      </div>
      
      
      <CustomBatOrder  socket={this.props.socket}></CustomBatOrder>
      
      

      <Footer></Footer>



      </div>
    );
  }
}
export default Custombatorderscreen;