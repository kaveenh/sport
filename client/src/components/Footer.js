import React, { Component } from "react";


class Footer extends Component {
  render() {
    return (
      <div>
        
      <div id="footer" >
          <div >
              <div className="row">
                    <div className="col-md-4">
                      <center>
                        <img src={require('./images/info.png')} className="img-circle" alt="Avatar"/>
                        
                        <h4 className="footertext">Info</h4>
                        <p className="footertext">About Sports:Store<br/></p>
                    
                      </center>
                    </div>
                    <div className="col-md-4">
                      <center>
                        <img src={require('./images/privacypolicy.png')} className="img-circle" alt="..."/>
                        
                        <h4 className="footertext">Privacy Policy</h4>
                        <p className="footertext">Terms & Conditions<br/></p>
                      </center>
                    </div>
                    <div className="col-md-4">
                      <center>
                        <img src={require('./images/contactus.jpg')} className="img-circle" alt="..."/>
                       
                        <h4 className="footertext">Contact Us</h4>
                        <p className="footertext">+94 77 839 56 93<br/>kaveenh95@gmail.com</p>
                      </center>
                    </div>
                  </div>
                  
          </div>
      </div>
            </div>
    
        
    );
  }
}
export default Footer;