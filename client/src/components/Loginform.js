import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {loginCustomer}from "../redux/actions/Loginactions"

class Loginform extends Component {

  constructor(props){
    super(props)
    this.state={
        email:"",
        password:"",
        err:""
    }
}
onChange=(e)=>{
  this.setState({
      [e.target.name]:e.target.value,
  })
}
onSubmit=(e)=>{
  e.preventDefault();
  this.props.socket.emit("Login",{
      email:this.state.email,
      password:this.state.password
  })
}

  render() {
    this.props.socket.on("password matched",(data)=>{
       
      localStorage.setItem('email',this.state.email)
      localStorage.setItem('password',this.state.password)
      this.props.loginCustomer({email:this.state.email, password:this.state.password})
      this.props.history.push("/")
    })
    this.props.socket.on("password not matched",()=>{
      console.log("password not matched")
      this.setState({
          err: "password not matched"
        })
    })
    this.props.socket.on("user not found",()=>{
      console.log("user not found")
      this.setState({
          err: "user not found please try again"
        })
    })
    this.props.socket.on("save successful",()=>{
      console.log("save successful")
    })
    this.props.socket.on("internal error",()=>{
      console.log("internal error")
      this.setState({
          err: "internal error"
        })
    })
    
    return (
      <div>
         <div className="container">
             <div className="card card-container">
                <div className="form-topic">
                <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>
                <h1 style = {{textAlign:"center"}}>Login</h1>
                </div>
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="alternative txt"/>
                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <input onChange={e=>this.onChange(e)} value={this.state.email} name="email" type="email" id="inputemail" className="form-control" placeholder="Email address" required autoFocus/>
                        <input onChange={e=>this.onChange(e)} value={this.state.password} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                        
                        <p style={{color:"red"}}></p>
                        <button onClick= {(e)=>{this.onSubmit(e)}} type="submit" className="btn btn-primary mb">Sign In</button>
                    </form>
                    <a href="/login" className="forgot-password">
                        Forgot your password?
                    </a>
                    <div>
            
                  <p style={{ color: "red" }}>{
                    this.state.err
                  }</p>
                </div>
             </div>
            </div>
        
      </div>
    );
  }
}
const mapActionsToProps={
  loginCustomer
}


export default withRouter(connect(null,mapActionsToProps)(Loginform));
