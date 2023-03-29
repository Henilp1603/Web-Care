import slugify from "slugify";
import Product from "../models/ProductModle.js";


const createProduct=async(req,res)=>{
    try {
        if(req.body.title){
            req.body.slug=slugify(req.body.title)
        }
        const newProduct=await Product.create(req.body);
        res.json(newProduct)
    } catch (error) {
        res.status(500).json(error)
    }

}

const getProduct=async(req,res)=>{
    const {id}=req.params;
    try {
        const findProduct=await Product.findById(id);
        res.json(findProduct)
    } catch (error) {
        res.status(500).json(error)
    }

}

const getAllProducts=async(req,res)=>{
    try {
        const Products=await Product.find();
        res.json(Products);
    } catch (error) {
        res.status(500).json(error)
    }

}

const updateProduct=async(req,res)=>{

    try {
        if(req.body.title){
            req.body.slug=slugify(req.body.title)

        }
        const updatedUser=await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
        
    }

}

const deleteProduct=async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted..")
    } catch (error) {
        res.status(500).json(error)
    }
}



export {createProduct,getProduct,getAllProducts,updateProduct,deleteProduct};
