import React, { Component } from "react";
import {Link} from 'react-router-dom';


class Cricketselectioncards extends Component {
  render() {
    return (
        
      
          <div className = "row">
		
	    <div className="col-md-3">
    		<div className="card mb">
              <img className="card-img-top" src= {require('./images/crickethomebat.jpg')} alt="Card image cap"/>
              <div className="card-body mb">
                <h5 className="card-title">Bats</h5>
                <p className="card-text">For players of every level there's a cricket bat that suits you in our collection.If its not in our collection lets make your own.</p>
                <button type="button" className="btn btn-primary mb">Shop Now</button>
                <Link to = '/cricket/customizebat'><button type="button" className="btn btn-primary mb ml-4">Customize Bat</button></Link>

              </div>
            </div>
        </div>
        <div className="col-md-3">
    		<div className="card mb">
              <img className="card-img-top" src={require('./images/crickethomehelmet.jpg')} alt="Card image cap"/>
              <div className="card-body mb">
                <h5 className="card-title">Helmets</h5>
                <p className="card-text">You can keep your head fully in the game,whether it be in training oe a match day,crafted by the best in the game</p>
                <button type="button" className="btn btn-primary mb">Shop Now</button>
              </div>
            </div>
        </div>
        
        <div className="col-md-3">
    		<div className="card mb">
              <img className="card-img-top" src = {require('./images/crickethomegloves.jpg')} alt="Card image cap"/>
              <div className="card-body mb">
                <h5 className="card-title">Gloves</h5>
                <p className="card-text">With high performance and unbeatable comfort,this collection of gloves is exactly what you are looking for.</p>
                <Link to ='/cricket/cricketgloves'><button type="button" className="btn btn-primary mb">Shop Now</button></Link>
              </div>
            </div>
        </div>

        <div className="col-md-3">
    		<div className="card mb">
              <img className="card-img-top" src = {require('./images/crickethomepads.jpg')} alt="Card image cap"/>
              <div className="card-body mb">
                <h5 className="card-title">Pads</h5>
                <p className="card-text">Kit yourself out and focus on the task in hand with batting pads that have got you covered .Find a fit and flex to meet your needs.</p>
                <button type="button" className="btn btn-primary mb">Shop Now</button>
              </div>
            </div>
        </div>

    
    <div style = {{backgroundColor:"#ecfbb8"}} className="card ml-3 mr-5 mt-auto mb-auto">
      <div className="row">
        <div className="col-md-4">
            <img src={require('./images/crickethomebag.jpg')} className="h-50 card-img-top"/>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">Cricket Bags</h4>
              <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <button type="button" className="btn btn-primary mb">Shop Now</button>
            </div>
          </div>

        </div>
      </div>
      
       
    </div>
  
      
        

    );  
  }
}
export default Cricketselectioncards;