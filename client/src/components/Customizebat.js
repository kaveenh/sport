import React, { Component } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {Link} from 'react-router-dom';
import {customBat}from "../redux/actions/CustomBatActions";
import {loginCustomer} from '../redux/actions/Loginactions'



class Customizebat extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
    baseModel:"English Willow Grade A (LKR 15,000)",
    sweetSpot:"Low",
    size:"Full Size Short Handle",
    weight:"2lb 10oz",
    spineProfile:"Recommended",
    edgeWidth:"Recommended",
    handleType:"Oval",
    gripColour:"White",
    toeGuard:"Yes(Black)",
    finishing:"None(Machine Rolled/Knocked)",
    notes:"",
    email:"",
    err:"",
    price:"LKR 15,000"
      
      
    };



  }
  
  customizeHandler = () =>{

    return{

      baseModel:this.state.baseModel,
    sweetSpot:this.state.sweetSpot,
    size:this.state.size,
    weight:this.state.weight,
    spineProfile:this.state.spineProfile,
    edgeWidth:this.state.edgeWidth,
    handleType:this.state.handleType,
    gripColour:this.state.gripColour,
    toeGuard:this.state.toeGuard,
    finishing:this.state.finishing,
    notes:this.state.notes,
    email:this.props.login.email,
    price:this.state.price
    

    }


  }

  sendCustomizeData = (data) => {
    this.props.socket.emit("SubmitBat",data)
    console.log(this.props.socket)
  }

  onChange = (e) => {
    
    this.setState({
      [e.target.name]:e.target.value,

      
    })
     
    if (e.target.value === "English Willow Grade A (LKR 15,000)"){
      
      this.setState({price:"LKR 15,000"})
    }else if (e.target.value === "English Willow Grade B (LKR 14,000)"){
      this.setState({price:"LKR 14,000"})


    }else if(e.target.value === "English Willow Grade C (LKR 13,000)"){
      this.setState({price:"LKR 13,000"})


    }
  }

  

  onSubmit = (e) => {

    
    
    if(this.props.login.email === ""){
      
      e.preventDefault();
      
      this.setState({
        err:<div> **You should <Link to = "/signup">REGISTER</Link> to obtain this service, or if you are already a member please <Link to = "/login">LOGIN</Link></div>
        
      })

    
      

    }
      
      
  else{
      
    
    localStorage.setItem('baseModel',this.state.baseModel)
    localStorage.setItem('sweetSpot',this.state.sweetSpot)
    localStorage.setItem('size',this.state.size)
    localStorage.setItem('weight',this.state.weight)
    localStorage.setItem('spineProfile',this.state.spineProfile)
    localStorage.setItem('edgeWidth',this.state.edgeWidth)
    localStorage.setItem('handleType',this.state.handleType)
    localStorage.setItem('gripColour',this.state.gripColour)
    localStorage.setItem('toeGuard',this.state.toeGuard)
    localStorage.setItem('finishing',this.state.finishing)
    localStorage.setItem('notes',this.state.notes)
    localStorage.setItem('price',this.state.price)
    this.props.customBat({baseModel:this.state.baseModel})
    this.props.customBat({sweetSpot:this.state.sweetSpot})
    this.props.customBat({size:this.state.size})
    this.props.customBat({weight:this.state.weight})
    this.props.customBat({spineProfile:this.state.spineProfile})
    this.props.customBat({edgeWidth:this.state.edgeWidth})
    this.props.customBat({handleType:this.state.handleType})
    this.props.customBat({gripColour:this.state.gripColour})
    this.props.customBat({toeGuard:this.state.toeGuard})
    this.props.customBat({finishing:this.state.finishing})
    this.props.customBat({notes:this.state.notes})
    this.props.customBat({price:this.state.price})
    
      
       
    
    }
    
  }

  componentDidMount(){
    this.setState({email:this.props.login.email})
    

  }

  onCancel = (e) =>{
    e.preventDefault();
      this.setState({
        notes:"",
        err:""
        
      })
  }

  

  
  render() {
    
    
    
    
    return (
      <div>
      
<div className = "container border mt-4 mb-4"> 
<div style = {{textAlign:"center"}}>
<h4>Send us your prefered design by customizing it below.</h4>
<h4>Please note that the prices will change only according to your prefered <strong>base model.</strong></h4>
</div>
 <img src={require('./images/custombat.jpg')} width="500px" className="rounded mx-auto d-block m-4" alt="  "/>


 <div  style = {{display:"flex"}}> 
<div style = {{marginRight:"100px"}} className="form-group">
    <label  for="basemodel"><strong>Base Model</strong></label>
    <select className="form-control" name = 'baseModel' onChange = {e => this.onChange(e)} value = {this.state.baseModel} id="basemodel">
      <option >English Willow Grade A (LKR 15,000)</option>
      <option >English Willow Grade B (LKR 14,000)</option>
      <option >English Willow Grade C (LKR 13,000)</option>
      
    </select>
    
  </div>
  
  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="sweetspot"><strong>Sweet Spot</strong></label>
    <select className="form-control" name = 'sweetSpot' onChange = {e => this.onChange(e)} value = {this.state.sweetSpot} id="sweetspot">
      <option>Low</option>
      <option>Middle</option>
      <option>High</option>
      
    </select>
  </div>

  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="size"><strong>Size</strong></label>
    <select className="form-control" name = "size" onChange = {e => this.onChange(e)} value = {this.state.size} id="size">
      <option>Full Size Short Handle</option>
      <option>Full Size Long Handle</option>
      <option>Harrow</option>
      <option>Junior</option>
    
    </select>
  </div>

  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="weight"><strong>Weight</strong></label>
    <select className="form-control" name = "weight" onChange = {e => this.onChange(e)} value = {this.state.weight} id="weight">
      <option>2lb 10oz</option>
      <option>2lb 60oz</option>
      <option>2lb 80oz</option>
      <option>2lb 90oz</option>
      <option>2lb 11oz</option>
      <option>2lb 12oz</option>
      <option>2lb 13oz</option>
      <option>2lb 14oz</option>
      <option>2lb 15oz</option>
      <option>3lb</option>
      <option>3lb 1oz</option>
      <option>3lb 2oz</option>
    </select>
  </div>



</div>
<div style = {{display:"flex"}}>
<div style = {{marginRight:"100px"}} className="form-group">
<label  for="spineProfile"><strong>Spine Profile</strong></label>

<select className="form-control" name = "spineProfile" onChange = {e => this.onChange(e)} value = {this.state.spineProfile} id = "spineprofile">
  
  <option>Recommended</option>
  <option>Standard</option>
  <option>Slightly Concaved</option>
  <option>Concaved</option>
</select>
</div>
<div style = {{marginRight:"100px"}} className="form-group">
<label  for="edgeWidth"><strong>Edge Width</strong></label>

<select className="form-control" name = "edgeWidth" onChange = {e => this.onChange(e)} value = {this.state.edgeWidth}>
  
  <option>Recommended</option>
  <option>30-33mm</option>
  <option>34-36mm</option>
  <option>37-39mm</option>
</select>
</div>
</div>

<div  style = {{display:"flex",marginTop:"20px"}}> 
<div style = {{marginRight:"100px"}} className="form-group">
    <label  for="handletype"><strong>Handle Type(Optional)</strong></label>
    <select className="form-control" name = "handleType" onChange = {e => this.onChange(e)} value = {this.state.handleType} id="handletype">
      <option>Oval</option>
      <option>Round</option>
      
      
    </select>
  </div>

  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="gripcolour"><strong>Grip Colour(Optional)</strong></label>
    <select className="form-control" name = "gripColour" onChange = {e => this.onChange(e)} value = {this.state.gripColour} id="gripcolour">
      <option>White</option>
      <option>Red</option>
      <option>Green</option>
      <option>Orange</option>
      <option>Grey</option>
      <option>Black</option>
      
    </select>
  </div>

  <div style = {{marginRight:"100px"}}className="form-group">
    <label for="toeguard"><strong>Toe Guard(Optional)</strong></label>
    <select className="form-control" name = "toeGuard" onChange = {e => this.onChange(e)} value = {this.state.toeGuard} id="toeguard">
      <option>Yes(Black)</option>
      <option>No</option>
      
    
    </select>
    
  </div>
  </div>
  <div style = {{display:"flex"}}>

  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="finishing"><strong>Finishing(Optional)</strong></label>
    <select className="form-control" name = "finishing" onChange = {e => this.onChange(e)} value = {this.state.finishing} id="finishing">
      <option>None (Machine Rolled/Knocked)</option>
      <option>Anti Scuff Sheet + Manual Knocking in</option>
      <option>Anti Scuff Sheet</option>
      <option>Oiling + Manual Knocking in</option>
      <option>Oiling</option>
      
      
    </select>
  </div>
  
      
<div style = {{marginLeft:"50px"}}>
<div class="form-group">
    <label for="notes"><strong>Notes(Optional)</strong></label>
    <textarea cols = "50" rows = "10" class="form-control" name = "notes" onChange = {e => this.onChange(e)} value = {this.state.notes} id="notes" rows="3"></textarea>
  </div>
  </div>
  </div>
  
  <a><strong>Price:  </strong></a><a>{this.state.price}</a><br></br>
  <Link to = '/cricket/customizebat/custombatorder'><button type="button" onClick={(e) => { this.onSubmit(e) }} className="btn btn-primary  mt-4">Customize Bat <span class="glyphicon glyphicon-shopping-cart"></span></button></Link>
        <button onClick={(e) => { this.onCancel(e) }} type="button" className="btn btn-primary mb ml-4 mt-4">Cancel</button><br></br>
        <div style = {{display:"Flex"}}>
        
        </div>
        <h4 style={{ color: "red" }}>{
                    this.state.err

                  }</h4>

        
  
  

  
</div>
<div className = "container border mb-4 col-5"style = {{marginLeft:"190px"}}>
  <h4 ><strong>Are you a Bulk Buyer</strong></h4>
  
   <a> We see sports clubs & retailers of the future as design boutiques and customer service hubs that can benefit from our services on the backend to delight their customers in real life!
If you are a retailer, a regular bulk buyer (club, school, hotel or resort) or want to become a sales affiliate, just visit our<Link to = "/cricket/customizebat/bulkbuyer"> Bulk Buyer</Link> page and we will set you up with a dedicated account manager to discuss further details.
</a>
  
  </div>
<img src={require('./images/Custom_bat.jpg')}  className = "col-12 mb-4" alt="  "/>

<div className = "container border" style = {{display:"flex"}}>
 </div> 

  
</div>



    );
  }
}

const mapStateToProps = (state) => {
  return{
    socket2: state.socket,
    login:state.login
  }
}

const mapActionsToProps = {
  customBat,
  loginCustomer
  
}



export default withRouter(connect(mapStateToProps, mapActionsToProps)(Customizebat)); 
