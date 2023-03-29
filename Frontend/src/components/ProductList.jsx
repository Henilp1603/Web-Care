import React from "react";
import Product from "./Product";
import Col from "react-bootstrap/Col";
import { useProductContext } from "../contexts/Productcontext";


function ProductList() {
  const { products } = useProductContext();
  
  return (
    <div className="container">
      <div>
        <div className="row">
          {products.map((product) => (
            <Col lg="3">
              <Product key={product._id} {...product} />
            </Col>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
