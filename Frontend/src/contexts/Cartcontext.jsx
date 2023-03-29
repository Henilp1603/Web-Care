import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../Reducer/cartReducer"

const Cartcontext=createContext()

const getLocalCartData=()=>{
    let newCartData=localStorage.getItem("_Cart");

    
    if (newCartData == []) {
        return []; 
    }else{
        return JSON.parse(newCartData);
    }
}

const initialState={
//    cart:[],
    cart: getLocalCartData(),
   total_item:"",
   total_price:"",
}

const CartProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);
    const addToCart=(id,price,sigleProduct)=>{
        dispatch({type:"ADD_TO_CART", payload:{id,price,sigleProduct}})
    };
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM", payload:{id}})
    };
    const incrementItem=(id)=>{
        dispatch({type:"INCREMENT_ITEM", payload:{id}})
    };
    const decrementItem=(id)=>{
        dispatch({type:"DECREMENT_ITEM", payload:{id}})
    };

    useEffect(()=>{
        dispatch({type:"GET_TOTAL"})
    },[state.cart])

    useEffect(()=>{
        localStorage.setItem("_Cart",JSON.stringify(state.cart))
    },[state.cart])

    return <Cartcontext.Provider value={{...state,addToCart,removeItem,incrementItem,decrementItem}} >{children}</Cartcontext.Provider>
}


const useCartContext =()=>{
    return useContext(Cartcontext);
};

export {CartProvider,Cartcontext,useCartContext}