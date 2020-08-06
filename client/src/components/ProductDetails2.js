import React, { Component } from "react";
import Cart from './Cart'

class ProductDetails2 extends Component {
    
  constructor(props, context) {
    super(props, context);
    this.state = {
      products: [
        { name: 'Slazenger Pro Tour RH', price: 2000.00 },
        
      ]
    };
  }


  render() {
    const galleryThumbnail = document.querySelectorAll(".thumbnails-list li");
    // select featured
    const galleryFeatured = document.querySelector(".product-gallery-featured img");
    
    // loop all items
    galleryThumbnail.forEach((item) => {
      item.addEventListener("mouseover", function () {
        let image = item.children[0].src;
        galleryFeatured.src = image;
      });
    });
    return (
        
      
          
        <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="card mb-10">
          
          <div class="card-body store-body">
            <div class="product-info">
              
               
                
                  <img src="https://via.placeholder.com/350x350/ffcf5b" alt=""/>
                
              
              <div class="product-seller-recommended">
                
                
                
                <div class="product-description mb-5">
                  <h2 class="mb-5">Features</h2>
                  <dl class="row mb-5">
                    <dt class="col-sm-3">Brand</dt>
                    <dd class="col-sm-9">Slazenger</dd>
                    <dt class="col-sm-3">Color</dt>
                    <dd class="col-sm-9">Black and White</dd>
                    <dt class="col-sm-3">Size</dt>
                    <dd class="col-sm-9">Senior</dd>
                    <dt class="col-sm-3">Hand</dt>
                    <dd class="col-sm-9">Right</dd>
                  </dl>
                  <h2 class="mb-5">Description</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nemo reiciendis quisquam a quis delectus consectetur ipsa eligendi aliquam earum in vitae voluptate ratione fugiat similique nostrum debitis dolor, ipsam quo officiis quas
                    necessitatibus? Magnam eveniet iure, eligendi est ullam consectetur repellat quis doloremque ad perspiciatis assumenda ducimus distinctio quaerat sit repudiandae illo praesentium modi dolor. Veritatis aperiam, minima natus assumenda
                    ipsum voluptatem reprehenderit? Possimus nobis, voluptate, blanditiis, temporibus ad nostrum corrupti quos corporis voluptas tempora aliquid magnam quia voluptatem rerum odit fugiat facere necessitatibus adipisci sunt. Veritatis architecto,
                    perferendis labore sit nobis eaque perspiciatis et iusto, in doloribus est!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vel reiciendis voluptatibus assumenda tempora vitae aut adipisci harum, corporis in id perferendis quia repellat reprehenderit temporibus aspernatur ab ullam magni error
                    consectetur, facilis inventore ipsum, veniam voluptas. Error laboriosam atque quisquam facere esse repellat consectetur quos eum, quaerat blanditiis saepe?</p>
                </div>
                
                </div>
                
              </div>
              <div class="product-payment-details">
              <p class="last-sold text-muted"><small>15 items sold</small></p>
              <h4 class="product-title mb-2">Slazenger Pro Tour RH Gloves</h4>
              <h2 class="product-price display-4">Rs 2000.00</h2>
              <p class="mb-0"><i class="fa fa-truck"></i> Delivery in all territory</p>
              <div className = "mt-4">
              {!!this.state.products && this.state.products.map((product, productIndex) => 
              <Cart addCartButton="true" count = "quantity" product={ { name: this.state.products[productIndex].name, price: this.state.products[productIndex].price } } />
        )}
        </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  

      
        

    );  
  }
}
export default ProductDetails2;