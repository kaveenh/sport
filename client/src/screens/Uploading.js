import React, { Component } from 'react';
import Uploadjerseyimage from '../components/Uploadjerseyimage';
import Appnavbar from '../components/Appnavbar'
import Footer from '../components/Footer'
import DatePicker from "react-datepicker";
import { withRouter } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux"
import {Link} from 'react-router-dom';


class Uploading extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        deadline:new Date(),
        description: "",
        image: '',
        imagePreviewUrl: '',
        error: "",
        email:"",
        address:"",
        XXS:"",
        XS:"",
        S:"",
        M:"",
        L:"",
        XL:"",
        XXL:"",


        
      
      };
      this.handleChange = this.handleChange.bind(this);
    }

    jerseyHandler = () =>{

      return{
        deadline:this.state.deadline,
        description:this.state.description,
        email:this.props.login.email,
        XXS:this.state.XXS,
        XS:this.state.XS,
        S:this.state.S,
        M:this.state.M,
        L:this.state.L,
        XL:this.state.XL,
        XXL:this.state.XXL,
         
        
      
        

        }
  
  
    }

    sendJerseyData = (data) => {
      this.props.socket.emit("UploadJersey",data)
      
    }
  
    handleChange(date) {
      this.setState({
        deadline: date
      });
    }
  
    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  
    
  
    onSubmit = (e) => {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.image);
      
      this.setState({ error: "" })
      if (this.state.image !== ""){

        this.sendJerseyData(this.jerseyHandler())
       this.setState({
         err:"**Your order is placed, we will contact you through your email for further details",
         email:this.props.login.email,
         
       }) 

      }
      else if(this.props.login.email === ""){
      
        e.preventDefault();
        
        this.setState({
          err: <div> **You should <Link to = "/signup">REGISTER</Link> to obtain this service, or if you are already a member please <Link to = "/login">LOGIN</Link></div>
          
        })
      }

      else if (this.state.image === ""){
        this.setState({ error: "Please Upload An Image" })
      }
      
    }
  
    onCancel = (e) =>{
      e.preventDefault();
        this.setState({
          image:"",
          description:"",
          imagePreviewUrl:"",
          XXS:"",
        XS:"",
        S:"",
        M:"",
        L:"",
        XL:"",
        XXL:"",
        err:""
          
        })
    }

   
    
  
    _handleImageChange(e) {
      
      e.preventDefault();
  
      let reader = new FileReader();
      let image = e.target.files[0];


      reader.onloadend = () => {
        this.setState({
          image: image,
          imagePreviewUrl: reader.result
        
        });
      }
  
      reader.readAsDataURL(image)
      
    }

    componentDidMount() {
      this.setState({email:this.props.login.email})
      

      
  
  
    }
  
    render() {

      let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className = "imgdrop"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

  
      return (
        
          <div className = "background">
      <Appnavbar></Appnavbar>
      
          <div id="backgroundMiddle" style={{ backgroundColor: "#ecfbb8",paddingBottom:"10px" ,marginBottom:"20px"}} className="cakeUploads col-md-10 offset-md-1">
            <div>
              <div className="cakeUploadsTopic">
                <h1 style = {{textAlign:"center"}}><b>Get your Jersey designed from us.</b></h1>
                <br></br>
                <h5>The procedure for designing your jersey by uploading an image is as follows:<br /></h5>
              </div>
              <div className="cakeUploadsBody">
                <link href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed" rel="stylesheet" />
                <h5>Upload an image below. Also type in a description of how your jersey has to be made. In the description section clearly specify the sizes, number of jerseys, collar type, and other details very clearly.<br /></h5>
              </div>
            </div>
            <div style={{ marginTop: "20px", marginLeft: "300px", paddingBottom: "20px" }} className="col-12 col-md-4"  >
            <div>
      <div className="previewComponent">
        <form>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
      </div>            </div>
  
            <div style={{ display: "flex", justifyContent: "center"}}>
              <div>
                <p style={{ color: "red" }}>{this.state.error}</p>
                <div className="row" style = {{marginBottom:"20px"}}>
                <p><strong>Deadline date:</strong></p>
                <DatePicker
                  selected={this.state.deadline}
                  onChange={this.handleChange}
                />
                </div>
                

                <div style = {{display:"flex",marginBottom:"20px"}} className = "form-group">
                <div style = {{marginRight:"50px"}}><p><strong>Sizes</strong></p></div>
                <p><strong>XXS: </strong></p>
                <div className="form-group" style = {{marginRight:"20px"}}>
                  <textarea onChange={e => this.onChange(e)} value={this.state.XXS} rows="1" cols = "1" name="XXS"  type="text" id="xxs" className="form-control input-lg"  tabindex="3" />
                </div>
                <p><strong>XS: </strong></p>
                <div className="form-group" style = {{marginRight:"20px"}}>
                  <textarea onChange={e => this.onChange(e)} value={this.state.XS} rows="1" cols = "1" name="XS"  type="text" id="xs" className="form-control input-lg"  tabindex="3" />
                </div>
                <p><strong>S: </strong></p>
                <div className="form-group" style = {{marginRight:"20px"}}>
                  <textarea onChange={e => this.onChange(e)} value={this.state.S} rows="1" cols = "1" name="S"  type="text" id="s" className="form-control input-lg"  tabindex="3" />
                </div>
                <p><strong>M: </strong></p>
                <div className="form-group" style = {{marginRight:"20px"}}>
                  <textarea onChange={e => this.onChange(e)} value={this.state.M} rows="1" cols = "1" name="M"  type="text" id="m" className="form-control input-lg"  tabindex="3" />
                </div>
                <p><strong>L: </strong></p>
                <div className="form-group" style = {{marginRight:"20px"}}>
                  <textarea onChange={e => this.onChange(e)} value={this.state.L} rows="1" cols = "1" name="L"  type="text" id="l" className="form-control input-lg"  tabindex="3" />
                </div>
                <p><strong>XL: </strong></p>
                <div className="form-group" style = {{marginRight:"20px"}}>
                  <textarea onChange={e => this.onChange(e)} value={this.state.XL} rows="1" cols = "1" name="XL"  type="text" id="xl" className="form-control input-lg"  tabindex="3" />
                </div>
                <p><strong>XXL: </strong></p>
                <div className="form-group" >
                  <textarea onChange={e => this.onChange(e)} value={this.state.XXL} rows="1" cols = "1" name="XXL"  type="text" id="xxl" className="form-control input-lg"  tabindex="3" />
                </div>
                </div>

                
                <div className="row">
                <p><strong>Description:</strong></p>
                <div className="form-group" style={{paddingTop:10}}>
                  <textarea rows="3" name="description" style={{width:500}} onChange={e => this.onChange(e)} value={this.state.description} type="text" id="display_name" className="form-control input-lg"  tabindex="3" />
                </div>
                </div>
              

                
                




                
              </div>
  
  
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
  
              <button onClick={(e) => { this.onSubmit(e) }} type="button" className="btn btn-primary mb ml-4">Upload</button>
            
              <button onClick={(e) => { this.onCancel(e) }} type="button" className="btn btn-primary mb ml-4">Cancel</button>
              
              
              
            </div>
            <h4 style={{ color: "red" }}>{
                    this.state.err

                  }</h4>
          </div>
  
          <div>
            <Footer />
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return{
      socket3: state.socket,
      login:state.login,
      
      
    }
  }
  
  export default withRouter(connect(mapStateToProps,null)(Uploading));