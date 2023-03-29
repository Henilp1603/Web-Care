const cartReducer=(state,action)=>{

    if (action.type==="ADD_TO_CART") {
      let {id,price,sigleProduct}=action.payload;
      let extistingProduct=state.cart.find((curProduct)=>curProduct.id === id)
      console.log("ep",extistingProduct)

      if (extistingProduct) {
          const updatedProduct=state.cart.map((curItem)=>{
            if (curItem.id === id) {
              // console.log("curP",curItem)
              let newQ=curItem.quantity + 1;
              return {
                ...curItem,
                quantity:newQ
              };
            }
            else{
                return curItem
            }
          })
          return {
            ...state,
            cart:updatedProduct
          }
        
      }
      else{
        let cartProduct;

        cartProduct={
          id,
          title:sigleProduct.title,
          price,
          image:sigleProduct.image,
          quantity:sigleProduct.quantity
        }
        
        return{
          ...state,
          cart:[...state.cart,cartProduct]
        }
      }

      
    }

    if (action.type==="REMOVE_ITEM") {
      return{
        cart:state.cart.filter((product)=>{
          return product.id !== action.payload.id
        })
      }
    }

    if (action.type === "INCREMENT_ITEM") {
      let updatedCart=state.cart.map((product)=>{
        if (product.id === action.payload.id) {
            return {...product,quantity:product.quantity+1}          
        }
        return product
      })
      return {...state,cart:updatedCart};
      
    }

    if (action.type === "DECREMENT_ITEM") {
      let updatedCart=state.cart.map((product)=>{
        if (product.id === action.payload.id) {
            return {...product,quantity:product.quantity-1}          
        }
        return product;
      }).filter((product)=>product.quantity!==0)
      return {...state,cart:updatedCart};
      
    }

    if (action.type === "GET_TOTAL") {
      let {total_item,total_price}=state.cart.reduce((accum,curval)=>{
        let {quantity,price}=curval;
        let updatedPrice=price*quantity;
        accum.total_item +=quantity;

        accum.total_price+=updatedPrice;

        return accum
      },{
        total_item:0,
        total_price:0
      });
      return {...state,total_item,total_price};
    }
  
      return state;
  
}

export default cartReducer;
