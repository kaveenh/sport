import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import Homepage from './screens/Homepage.js'

import Customizescreen from './screens/Customizescreen.js'
import Crickethome from './screens/Crickethome.js'
import Loginscreen from './screens/Loginscreen.js'
import Signupscreen from './screens/Signupscreen.js'
import Cricketglovesscreen from './screens/Cricketglovesscreen'

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {loginCustomer} from './redux/actions/Loginactions'

import openSocket from 'socket.io-client';
import {CONNECTION_URL} from './constants/index'







import{Route,Switch} from "react-router-dom";
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
    Signupscreen: () => (<Signupscreen socket={socket}/>),
    Loginscreen:()=>(<Loginscreen socket={socket}/>)

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
          <Route  exact path = "/" component = {Homepage}/>
          <Route  exact path  = "/cricket" component = {Crickethome}/>
          <Route  exact path  = "/cricket/customizebat" component = {Customizescreen}/>
          <Route  exact path  = "/cricket/cricketgloves" component = {Cricketglovesscreen}/>

          <Route path="/login" component={this.screens.Loginscreen}/>
          <Route path="/signUp" component={this.screens.Signupscreen}/>
        </Switch>
        
      </div>
//       <div>
//       <Uploadjersey></Uploadjersey>
//  </div>
      

      
    );
  }
}
const mapActionsToProps={
  loginCustomer
}


export default withRouter(connect(null,mapActionsToProps)(App));

