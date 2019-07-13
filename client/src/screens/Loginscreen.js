import React, { Component } from "react";
import Loginform from '../components/Loginform.js';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";


class Loginscreen extends Component {
  
  
  render() {
    
    return (
      <div>
      <div>
      <Appnavbar></Appnavbar>
      </div>

<Loginform  socket = {this.props.socket}></Loginform>
      <Footer></Footer>



      </div>
    );
  }
}
export default Loginscreen;