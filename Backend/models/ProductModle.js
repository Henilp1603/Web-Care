import mongoose from "mongoose";
// const APP_URL=http://localhost:5000


const Schema=mongoose.Schema;

const productSchema = new Schema({
    title:{ type:String, required:true,trim:true},
    slug:{type:String, required:true, unique:true,lowercase:true},
    description:{type:String,required:true},
    price:{type:Number, required:true},
    category:{type:String,required:true},
    quantity:{type:Number},
    image:{ type:String , required:true,get:(image)=>{
        return `${process.env.APP_URL}/${image}`;
    }},
},{timestamps:true})

export default mongoose.model('Product',productSchema);