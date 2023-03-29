import React from 'react'
import { useCartContext } from '../contexts/Cartcontext'
import "../styles/cart.css"


function CartPage() {
  const {cart,removeItem,incrementItem,decrementItem,total_item,total_price}=useCartContext()

  if (cart.length ===0) {
    return (
      <div className='Container empty-cart'>No Item In Cart</div>
    )
  }
  return (
    <section className='cartSection' >

  <div className='Container'>

  <div className='cart'>
    <div className='top' >
      <h2>Shopping Cart</h2>
      <h2 id='items' >{total_item} Items</h2>
    </div>
    <table cellPadding="0"  >
      <tr className='table-head' >    
        <th width="150" className='head-img' >Images</th>
        <th width="360" >Name</th>
        <th width="140" >Quantity</th>
        <th width="140" >Price</th>
        <th width="70" >Delete</th>
      </tr>
      {
        cart.map((product)=>(
          
          <tr>
            {console.log(product)}
      <td className='imgTD'><div className='img-box'><img src={product.image} className='img' /></div></td>
        <td className='nameTD'><p>{product.title}</p></td>
        <td className='priceTD' ><div className='Quantity'><i class="fa-solid fa-plus fa-2x" onClick={()=>incrementItem(product.id)}  ></i><h2>{product.quantity}</h2><i class="fa-solid fa-minus fa-2x" onClick={()=>decrementItem(product.id)} ></i></div></td>
        <td className='priceTD' ><h2>{product.price}</h2></td>

        <td className='deleteTD'><i class="fa-solid fa-trash fa-3x" onClick={()=>removeItem(product.id)} ></i></td>
      </tr>
        ))
      }
      
      

    </table>
    <table id='root' cellSpacing="0" ></table>

  </div>
  <div className='summary'>
    <div className='top'>
      <h2>Order Summary</h2>
    </div>
    <div className='details' >
      <h2 id='itemB' >{total_item} Items</h2>
      <h2 id='totalA' >${total_price}</h2>
    </div>
    <div className='detailA'>
      <h2>Shopping</h2>
      <input type="text" placeholder='Standard Delivery' />
      {/* <h2>Promo Code</h2>
      <input type="text" placeholder='Apply Promo Code' />
      <button className='first-btn'>Apply</button> */}
    </div>
    <div class="hline"></div>
    <div className='top'>
      <h2>Total</h2>
      <h2>${total_price}</h2>
    </div>
    <div className='checkoutdiv'>
      <button className='checkout' >Check Out</button>
    </div>
  </div>
  </div>  
  
    </section>

  )
}

// import "../styles/cart.css";
export default CartPage
