import React, { Component } from "react";



class Customizebat extends Component {
  
  
  render() {
    
    return (
      
<form className = "container border mt-4">  

 <img src={require('./images/custombat.jpg')} width="500px" className="rounded mx-auto d-block m-4" alt="  "/>


 <div  style = {{display:"flex"}}> 
<div style = {{marginRight:"100px"}} className="form-group">
    <label  for="basemodel"><strong>Base Model</strong></label>
    <select className="form-control" id="basemodel">
      <option >English Willow Grade A</option>
      <option >English Willow Grade B</option>
      <option >English Willow Grade C</option>
      
    </select>
  </div>
  
  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="sweetspot"><strong>Sweet Spot</strong></label>
    <select className="form-control" id="sweetspot">
      <option>Low</option>
      <option>Middle</option>
      <option>High</option>
      
    </select>
  </div>

  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="size"><strong>Size</strong></label>
    <select className="form-control" id="size">
      <option>Full Size Short Handle</option>
      <option>Full Size Long Handle</option>
      <option>Harrow</option>
      <option>Junior</option>
    
    </select>
  </div>

  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="weight"><strong>Weight</strong></label>
    <select className="form-control" id="weight">
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
<select className="form-control">
  <option selected>Spine Profile(Optional)</option>
  <option value = "1">Recommended</option>
  <option value="2">Standard</option>
  <option value="3">Slightly Concaved</option>
  <option value="3">Concaved</option>
</select>
<select className="form-control">
  <option selected>Edge Width(Optional)</option>
  <option value="1">Recommended</option>
  <option value="2">30-33mm</option>
  <option value="3">34-36mm</option>
  <option value="3">37-39mm</option>
</select>
</div>

<div  style = {{display:"flex",marginTop:"20px"}}> 
<div style = {{marginRight:"100px"}} className="form-group">
    <label  for="handletype"><strong>Handle Type(Optional)</strong></label>
    <select className="form-control" id="handletype">
      <option>Oval</option>
      <option>Round</option>
      
      
    </select>
  </div>

  <div style = {{marginRight:"100px"}}className="form-group">
    <label  for="gripcolour"><strong>Grip Colour(Optional)</strong></label>
    <select className="form-control" id="gripcolour">
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
    <select className="form-control" id="toeguard">
      <option>Yes(Black)</option>
      <option>No</option>
      
    
    </select>
    
  </div>
  </div>
  <div style = {{display:"flex"}}>
  
      <div>
  <label ><strong>Finishing(Optional)</strong></label>
  <div class="custom-control custom-radio">
  
  <input type="radio" id="none" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="none">None (Machine Rolled/Knocked)</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="antiscuff+manual" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="antiscuff+manual">Anti Scuff Sheet + Manual Knocking in </label>
</div>
<div class="custom-control custom-radio">
  
  <input type="radio" id="antiscuff" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="antiscuff">Anti Scuff Sheet </label>
</div>
<div class="custom-control custom-radio">
  
  <input type="radio" id="oil+manual" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="oil+manual">Oiling + Manual Knocking in </label>
</div>
<div class="custom-control custom-radio">
  
  <input type="radio" id="oil" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="oil">Oiling</label>
</div>
</div>
<div style = {{marginLeft:"200px"}}>
<div class="form-group">
    <label for="notes"><strong>Notes(Optional)</strong></label>
    <textarea class="form-control" id="notes" rows="3"></textarea>
  </div>
  </div>
  </div>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
  <button style = {{backgroundColor:"black"}}class="btn btn-primary m-4" type="submit">Order Now <span class="glyphicon glyphicon-shopping-cart"></span>
        </button>
  
  

  
</form>


    );
  }
}
export default Customizebat;