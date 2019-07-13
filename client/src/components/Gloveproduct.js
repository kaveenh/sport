import React, { Component,Fragment } from 'react'

class Gloveproduct extends Component {

  

  render() {
    
    

    return (

<div class="container-fluid border" >
    <div class="content-wrapper" >	
		<div class="item-container" >
        	
	
			<div class="container">
				<div class="col-md-12" >
					<div class="product col-md-3 service-image-left" >
                    
						<center>
							<img id="item-display" src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png" alt=""></img>
						</center>
					</div>
					
					
				</div>
                <div class="col-md-7 ">
					<div class="product-title">Corsair GS600 600 Watt PSU</div>
					<div class="product-desc">The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC</div>
					<div class="product-rating"><i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star-o"></i> </div>
					
					<div class="product-price">$ 1234.00</div>
					<div class="product-stock">In Stock</div>
					
					<div class="btn-group cart">
						<button type="button" class="btn btn-success">
							Add to cart 
						</button>
					</div>
					<div class="btn-group wishlist">
						<button type="button" class="btn btn-danger">
							Add to wishlist 
						</button>
					</div>
				</div>
			
            </div>
		</div>
        
		</div>
	</div>




    );
  }
}

export default Gloveproduct;