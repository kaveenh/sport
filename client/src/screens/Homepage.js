import React, { Component } from 'react';
import Carousel from '../components/Carousel.js'
import Scrollbox from '../components/Scrollbox.js'
import Homepagecards from '../components/Homepagecards.js'
import Appnavbar from '../components/Appnavbar.js'
import Footer from '../components/Footer.js'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";



class Homepage extends Component {

  


  render() {
    
    
    return (
      <div className = "background">
        
        <div className = "mb-5">
          <Appnavbar></Appnavbar>
          </div>

        <div className = "mt-auto">

              <div  className="row">
                <div className = "m-auto">
                  <Carousel />
                </div>
                <div className = "mr-auto">
                  <Scrollbox />
                </div>
              </div>
            </div>


            <div>
              <Homepagecards></Homepagecards>
            </div>
            
            
          
        
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    type: state.login.type
  }
}

export default withRouter(connect(mapStateToProps, null)(Homepage));