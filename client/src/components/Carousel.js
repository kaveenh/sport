import React,{Component} from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


class Carousel extends Component{
    render(){
        
        
  return (
    <MDBContainer>
    
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true}  style = {{height:"600px", width:"800px"}}className="z-depth-1" >
        <MDBCarouselInner id = "carousel">
          <MDBCarouselItem id = "carousel" itemId="1">
            <MDBView>
              <img   id = "carousel" className="d-block w-100" src={require('./images/cricketcarousel.jpg')} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Buy Your Cricketing Goods</h3>
              <p>Customize your own bat</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img id = "carousel" className="d-block w-100" src={require('./images/rugbycarousel.jpg')} alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Buy Other Sports Goods</h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img id ="carousel" className="d-block w-100" src={require('./images/crossfitcarousel.jpg')} alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">And Many More</h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img id = "carousel" className="d-block w-100" src={require('./images/jerseycarousel.jpg')} alt="Mattonit's item" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Design Your Team Jersey </h3>
              <p>Send us your design</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
}

export default Carousel;