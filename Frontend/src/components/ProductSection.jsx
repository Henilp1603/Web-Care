import React from "react";
import Product from "./Product";

import Col from "react-bootstrap/Col";
import {useProductContext} from "../contexts/Productcontext";

function ProductSection() {
  const {featureProduct} = useProductContext();
  
  return (
    <>
      <section id="products " className="products">
      <h1 className="heading"><span>'</span> our Products <span>'</span></h1>
        <div className="container">
          <div className="box-container">
              <div className="box">

              <div className="row">
              {featureProduct.map((product) => (
                <Col lg="4">
                  <Product key={product._id} {...product} />
                </Col>
              ))}
              </div>
            </div>
          <div className="pt-5 mt-5 text-center">
           <a href="#"><button className="button ">Explore</button></a>
         </div>
          </div>
        </div>

        
      </section>
    </>
  );
}

export default ProductSection;
