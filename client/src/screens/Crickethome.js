import React, { Component } from "react";
import Cricketselectioncards from '../components/Cricketselectioncards.js';
import Footer from '../components/Footer'
import Appnavbar from "../components/Appnavbar.js";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class Cricekthome extends Component {
  
  render() {
    
    return (
      <div className = "background">
      <div>
      <Appnavbar></Appnavbar>
      </div>

      <Cricketselectioncards></Cricketselectioncards>

      <Footer></Footer>

      

      </div>
    );
  }
}
export default Cricekthome;