import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer"

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProduct:[],
    sigleProduct:{}
}
const AppContext=createContext(initialState);
 
const API="http://localhost:5000/api/product/"




const AppProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);
    
   
        // dispatch({type:"SET_LOADING"})
        const getProducts=async(url)=>{
            const res= await axios.get(url)
            const products=await res.data
            dispatch({type:"SET_API_DATA",payload:products});
        };
    
    
    const getSingleProduct=async(url)=>{
        const res= await axios.get(url)
        const singleProducts=await res.data
        dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProducts});
       
    };


    useEffect(()=>{
           
        getProducts(API);
     },[]);


    return<AppContext.Provider value={{ ...state ,getSingleProduct}} >{children}</AppContext.Provider>;
};

const useProductContext =()=>{
    return useContext(AppContext);
};

export {AppProvider,AppContext,useProductContext};