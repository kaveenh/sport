
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {loginCustomer}from "../redux/actions/Loginactions"
import {connect} from "react-redux"
import{Navbar,Nav,NavDropdown} from 'react-bootstrap'

class Appnavbar extends Component{
  constructor(props){
    super(props);
    this.state = {
        active : "/",
    }
}
changeColor = () => {
  console.log(this.getAttribute('data-value'))
  if(this.getAttribute('data-value') === this.state.active){

  }
}

renderLoginSignup=()=>{
  return(
      
      <ul className="navbar-nav">
      <li  style = {{marginLeft:"800px"}}className="nav-item"><NavLink to = '/login'>
      <a  className="nav-link" onClick={()=> this.setState({
                   active : 'login',
               })}>Sign In</a></NavLink>
    </li>
    <li className="nav-item"><NavLink to = '/signup'>
      <a className="nav-link" onClick={()=> this.setState({
                   active : 'signup',
               })}>Register</a></NavLink>
    </li>
    </ul>
  
  
  )
}

logout=()=>{
  this.props.loginCustomer({email:"",password:""})
  localStorage.clear() //clearing all cookies
  
}


renderUserIfLoggedIn=(userName)=>{

  return(
    <Nav>
   <NavLink to="/"><a  className="nav-link" onClick={()=> this.setState()}>Hi {userName}</a></NavLink>
   <NavLink to="/login"><a  className="nav-link" onClick={()=> this.logout()}>Logout</a></NavLink>
    

  

    
  </Nav>
  )
}

renderUser=()=>{
  console.log(this.props.login.email)
  if(this.props.login.email===""){
      return this.renderLoginSignup()

  }
  else{ 
      return this.renderUserIfLoggedIn(this.props.login.email)
  }
      
}

  render(){
  
    return(

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <NavLink to = "/"><Navbar.Brand href="/"><img src={require('./images/logo.png')} width="30px" height="30px" className="d-inline-block align-auto" alt="  "/>  SPORTS:STORE</Navbar.Brand></NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     <NavLink  to = "/cricket" ><a className="nav-link" onClick={()=> this.setState({
                   active : 'cricket',
               })}>Cricket</a></NavLink>
     <NavLink to="/rugby"><a className="nav-link" onClick={()=> this.setState({
                   active : 'rugby',
               })}>Rugby</a></NavLink>
      <NavDropdown title="Other" id="collasible-nav-dropdown">
      <NavDropdown.Item><NavLink to = "/hockey">Hockey</NavLink></NavDropdown.Item>
        <NavDropdown.Item ><NavLink to="/athletics">Athletics</NavLink></NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item ><NavLink to="/designjersey">Design Your Jersey</NavLink></NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    {this.renderUser()}

  </Navbar.Collapse>

</Navbar>
    )
}
}
const mapStateToProps=(state)=>{
  return {login: state.login}
}
const mapActionsToProps={
   loginCustomer
}

export default connect(mapStateToProps,mapActionsToProps) (Appnavbar);


