import React from "react";
import "../styles/singleProduct.css";
import NavB from "./NavB";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useProductContext} from "../contexts/Productcontext";
import {useCartContext} from "../contexts/Cartcontext";

const API = "http://localhost:5000/api/product";

function SP() {
  const {getSingleProduct, sigleProduct} = useProductContext();
  const {addToCart} = useCartContext();
  const {id} = useParams();

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);
  //  console.log(sigleProduct)

  return (
    <>
      <NavB />
      <div className="main-wrapper">
        <div className="container">
          <div className="product-div">
            <div className="product-div-left">
              <div className="img-container">
                <img src={sigleProduct.image} alt="watch" />
              </div>
            </div>
            <div className="product-div-right">
              <span className="product-name">{sigleProduct.title}</span>
              <span className="product-price">${sigleProduct.price}</span>
              <div className="product-rating">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star-half-alt"></i>
                </span>
              </div>
              <p className="product-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                animi ad minima veritatis dolore. Architecto facere dignissimos
                voluptate fugit ratione molestias quis quidem exercitationem
                voluptas.
              </p>
              <div className="btn-groups">
                <button
                  type="button"
                  className="add-cart-btn"
                  onClick={() =>
                    addToCart(
                      sigleProduct._id,
                      sigleProduct.price,
                      sigleProduct
                    )
                  }
                >
                  <i className="fas fa-shopping-cart"></i>add to cart
                </button>
                <button type="button" className="buy-now-btn">
                  <i className="fas fa-wallet"></i>buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SP;
