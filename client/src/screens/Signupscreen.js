import React, { Component } from "react";
import Signupform from '../components/Signupform.js';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";


class Signupscreen extends Component {

  
  render() {
    
    return (
    

      <div className = "background">
      <div>
      <Appnavbar></Appnavbar>
      </div>

<Signupform socket={this.props.socket}></Signupform>      

<Footer></Footer>



      </div>
    );
  }
}
export default Signupscreen;