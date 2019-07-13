import React, { Component } from "react";


class Homepagecards extends Component {
  render() {
    return (
        <div>
        <div className = "row">

        
        <div className="card" style={{width: "18rem",backgroundColor:"#ecfbb8",color:"white"}}>
            <img className="card-img-top" src={require('./images/menstrainers.jpg')} alt="Card image cap"/>
            <div className="card-body">
                <h5 style = {{color:"black"}} className="card-title">Mens Trainers</h5>
                <p style = {{color:"black"}} className="card-text">Whether you’re shopping for comfort, practicality or style, our collection of men’s trainers is the ideal place to start. We stock an incredible selection of discounted men's trainers for every season from the latest fashion.</p>
                <button href="#" className="btn btn-primary mb">Choose Your's</button>
            </div>
        </div>
        <div className="card" style={{width: "18rem",backgroundColor:"#ecfbb8",color:"white"}}>
            <img className="card-img-top" src={require('./images/rugbyboots.jpg')} alt="Card image cap"/>
            <div className="card-body">
                <h5 style = {{color:"black"}}className="card-title">Rugby Boots</h5>
                <p style = {{color:"black"}}className="card-text">Give it your best on the pitch, with our collection of rugby boots . We've got men's and kids rugby boots from some of the biggest names like Canterbury, Kooga, adidas and more.  </p>
                <button href="#" className="btn btn-primary mb">Choose Your's</button>
            </div>
        </div>
        <div className="card" style={{width: "18rem",backgroundColor:"#ecfbb8",color:"white"}}>
            <img className="card-img-top" src={require('./images/goalkeepergloves.jpg')} alt="Card image cap"/>
            <div className="card-body">
                <h5 style = {{color:"black"}}className="card-title">Kit for the Keepers</h5>
                <p style = {{color:"black"}}className="card-text">Keep yours hands protected whilst preventing the goals, with our selection of goalkeeper gloves. Manufactured by some of the biggest brands including Nike, adidas and Umbro etc. </p>
                <button href="#" className="btn btn-primary mb">Choose Your's</button>
            </div>
        </div>
        <div className="card" style={{width: "18rem",backgroundColor:"#ecfbb8",color:"white"}}>
            <img className="card-img-top" src={require('./images/crickethelmet.jpg')} alt="Card image cap"/>
            <div className="card-body">
                <h5 style = {{color:"black"}}className="card-title">Cricket Helmets</h5>
                <p style = {{color:"black"}}className="card-text">Keep your head protected during the game with our selection of cricket helmets! All boasting quality craftsmanship from outstanding brands such as Slazenger and Masuri, these cricket helmets are ideal for any match or training session. </p>
                <button href="#" className="btn btn-primary mb">Choose Your's</button>
            </div>
        </div>
        
        </div>

<div className = "row">

        
<div className="card" style={{width: "18rem",backgroundColor:"#ecfbb8",color:"white"}}>
    <img className="card-img-top" src={require('./images/hockey.jpg')} alt="Card image cap"/>
    <div className="card-body">
        <h5 style = {{color:"black"}} className="card-title">Hockey</h5>
        <p style = {{color:"black"}} className="card-text">Whether you’re shopping for comfort, practicality or style, our collection of men’s trainers is the ideal place to start. We stock an incredible selection of discounted men's trainers for every season from the latest fashion.</p>
        <button href="#" className="btn btn-primary mb">Choose Your's</button>
    </div>
</div>
<div className="card" style={{width: "18rem",backgroundColor:"#ecfbb8",color:"white"}}>
    <img className="card-img-top" src={require('./images/football.jpg')} alt="Card image cap"/>
    <div className="card-body">
        <h5 style = {{color:"black"}}className="card-title">Football </h5>
        <p style = {{color:"black"}}className="card-text">Give it your best on the pitch, with our collection of rugby boots . We've got men's and kids rugby boots from some of the biggest names like Canterbury, Kooga, adidas and more.  </p>
        <button href="#" className="btn btn-primary mb">Choose Your's</button>
    </div>
</div>
<div className="card" style={{width: "18rem",backgroundColor:"#ecfbb8",color:"white"}}>
    <img className="card-img-top" src={require('./images/athletic.jpg')} alt="Card image cap"/>
    <div className="card-body">
        <h5 style = {{color:"black"}}className="card-title">Mens running</h5>
        <p style = {{color:"black"}}className="card-text">Keep yours hands protected whilst preventing the goals, with our selection of goalkeeper gloves. Manufactured by some of the biggest brands including Nike, adidas and Umbro etc. </p>
        <button href="#"className="btn btn-primary mb">Choose Your's</button>
    </div>
</div>
<div className="card" style={{width: "18rem",backgroundColor:"#ecfbb8",color:"white"}}>
    <img className="card-img-top" src={require('./images/swimming.jpg')} alt="Card image cap"/>
    <div className="card-body">
        <h5 style = {{color:"black"}}className="card-title">Swim Suits</h5>
        <p style = {{color:"black"}}className="card-text">Keep your head protected during the game with our selection of cricket helmets! All boasting quality craftsmanship from outstanding brands such as Slazenger and Masuri, these cricket helmets are ideal for any match or training session. </p>
        <button href="#"className="btn btn-primary mb">Choose Your's</button>
    </div>
</div>

</div>
</div>
    );
  }
}
export default Homepagecards;