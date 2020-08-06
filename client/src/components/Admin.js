import React, { Component } from "react";
import Appnavbar from './Appnavbar'

class Admin extends Component {
  
  
  render() {
    
    return (
      <div className = "background">
       
    <h1 ><center>HELLO ADMIN</center></h1>
    <img className = "ml-5" src = {require("./images/background.jpg")}></img>
      




      </div>
    );
  }
}
export default Admin;