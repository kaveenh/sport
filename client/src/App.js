import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';

import Homepage from './screens/Homepage.js'

import Customizescreen from './screens/Customizescreen.js'
import Crickethome from './screens/Crickethome.js'
import Loginscreen from './screens/Loginscreen.js'
import Signupscreen from './screens/Signupscreen.js'
import Cricketglovesscreen from './screens/Cricketglovesscreen'
import Uploading from './screens/Uploading'
import {connect} from "react-redux";
import {withRouter, Router} from "react-router-dom";
import {loginCustomer} from './redux/actions/Loginactions'



import openSocket from 'socket.io-client';
import {CONNECTION_URL} from './constants/index'

import Custombatorderscreen from './screens/Custombatorderscreen'
import Productdetailscreen1 from './screens/Productdetailscreen1';
import Checkoutscreen from './screens/Checkoutscreen';
import Productdetailscreen2 from './screens/Productdetailscreen2'
import Admin from './components/Admin';





import{Route,Switch} from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { customBat } from './redux/actions/CustomBatActions';
export const socket = openSocket(CONNECTION_URL);


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      email:null,
      password:null
    }
  }


  screens ={
    Homepagescreen:() => (<Homepage socket = {socket}/>),
    Signupscreen: () => (<Signupscreen socket={socket}/>),
    Loginscreen:()=>(<Loginscreen socket={socket}/>),
    Uploading:()=>(<Uploading socket={socket}/>),
    Customizescreen: ()=>(<Customizescreen/>),
    Custombatorderscreen:()=>(<Custombatorderscreen socket = {socket}/>),
    Productdetailscreen1:()=>(<Productdetailscreen1/>),
    Productdetailscreen2:()=>(<Productdetailscreen2/>),
    Checkoutscreen:()=>(<Checkoutscreen socket = {socket}/>)

    
    
    
    
    

  }
  componentWillMount(){
    if(localStorage.getItem('email'))

    {
      socket.emit("Login",{email:localStorage.getItem('email') ,password:localStorage.getItem('password')})
    }
    

  }
  
  


  render() {
    return (
      <div>
      
        <Switch>
          <Route  exact path = "/" component = {this.screens.Homepagescreen}/>
          <Route  exact path  = "/cricket" component = {Crickethome}/>
          <Route  exact path  = "/cricket/customizebat" component = {this.screens.Customizescreen}/>
          <Route  exact path  = "/cricket/cricketgloves" component = {Cricketglovesscreen}/>
          <Route exact path="/login" component={this.screens.Loginscreen}/>
          <Route exact path="/signUp" component={this.screens.Signupscreen}/>
          <Route  exact path="/designjersey" component={this.screens.Uploading}/>
          <Route  path = "/cricket/customizebat/custombatorder" component = {this.screens.Custombatorderscreen}/>
          <Route   path = "/cricket/cricketgloves/glovedetails" component = {this.screens.Productdetailscreen1}/>
          <Route   path = "/cricket/cricketgloves/glovedetails2" component = {this.screens.Productdetailscreen2}/>

          <Route exact path='/checkout' component={this.screens.Checkoutscreen} />
          <Route exact path='/admin' component = {Admin}/>
          
        </Switch>
        
        
     </div>
//       <div>
//       <Productdetailscreen></Productdetailscreen>
//  </div>
      

      
    );
  }
}
const mapActionsToProps={
  loginCustomer
}


export default withRouter(connect(null,mapActionsToProps)(App));

