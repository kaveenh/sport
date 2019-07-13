import React, { Component } from "react";

class Scrollbox extends Component {
  render() {
    return (
        
        <div style={{height:"600px",width:"320px",overflow:"scroll"}}>
        <img src={require('./images/scroll1.jpg')}  className = "img-thumbnail"alt="..."/>
        <img src={require('./images/scroll2.jpg')}  className = "img-thumbnail"alt="..."/>
        <img src={require('./images/scroll3.jpg')}  className = "img-thumbnail"alt="..."/>
        <img src={require('./images/scroll4.jpg')}  className = "img-thumbnail"alt="..."/>
        <img src={require('./images/scroll5.jpg')}  className = "img-thumbnail"alt="..."/>
</div>

    );  
  }
}
export default Scrollbox;