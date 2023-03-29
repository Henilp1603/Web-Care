// const express=require("express");
// const { default: mongoose } = require("mongoose");
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express"
import mongoose from "mongoose";
import morgan from "morgan";
import dbconnect from "./config/dbconnect.js";
import authRouter from "./routes/authRoute.js"
import productRouter from "./routes/productRoute.js"
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const port=process.env.PORT ||4000;

const app=express();
// mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true, useUnifiedTopology:true});
// const db=mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',()=>{
    //     console.log('DB connected..');
    // });
    dbconnect()
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
        })

        // global.appRoot = path.resolve(__dirname);


app.use('/uploads',express.static('uploads'));
// console.log(__dirname)
    
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser())


app.use("/api/user",authRouter);
app.use("/api/product",productRouter)


app.listen(port,()=>{
    console.log(`server listening on ${port}`)
});
