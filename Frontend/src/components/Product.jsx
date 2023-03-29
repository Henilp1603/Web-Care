import React from 'react'
import { Link } from 'react-router-dom';
import FormatePrice from './FormatePrice';


function Product(product) {
  return (
    <>
    
        <div className="text-center  py-5 ">   
              <div className="card product-card ">
                <div
                  className="bg-image  hover-zoom ripple ripple-surface ripple-surface-light"
                >
                
                    <Link to={product._id} >
                    
                   <img src={product.image} className=" my-image  card-img-top  object-fit-cover " />
                    </Link>
                  

                  
                </div>
                <div className="card-body">
                  
                    <h2 className="card-title mb-3 fw-bold">{product.title}</h2>
                  
                  
                    <p>Category</p>
                  
                  <h4 className="mb-3">{<FormatePrice price={product.price} />}</h4>
                </div>
              </div>
                      
          
        </div>
    
    </>
  )
}

export default Product
