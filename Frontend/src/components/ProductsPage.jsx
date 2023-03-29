import React from 'react'
import { useParams } from 'react-router-dom';
import ProductList from './ProductList'

function ProductsPage() {
  const {id}=useParams();
  console.log(id)

  return (
    <>

      <section className="products"  >
        <div className='container' >
        <h1 className="heading">
          <span>'</span> Products <span>'</span>
        </h1>
         <ProductList/>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
