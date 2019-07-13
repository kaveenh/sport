import React, { Component } from 'react';
import Link from 'react-router-dom/Link';




class Loggednavbar extends Component {
    

    render() {
        
        return (
         

            <nav style = {{minHeight:"70px"}}className=" navbar navbar-expand-lg navbar-dark bg-dark mb-3">
       
            <a className="navbar-brand" href="#">
          <img src={require('./images/logo.png')} width="40px" height="40px" className="d-inline-block align-auto" alt="  "/> SPORTS:STORE
        </a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Cricket<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Rugby</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Football</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Other
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Hockey</a>
          <a className="dropdown-item" href="#">Athletics</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Send Us Your Jersey Design</a>
        </div>
      </li>
      <li style = {{marginLeft :"800px"}} className="nav-item">
        <a  className="nav-link" href="#">Sign Out</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
        );
    }
}


export default Loggednavbar;