import 'express-async-errors';
import * as dotenv from 'dotenv';
import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import cloudinary from "cloudinary";
//router
import jobRouter from './routes/jobRouter.js';
import authRouth from './routes/authRouther.js';
import userRouther from './routes/userRouther.js  ';
//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//db 
import mongoose from 'mongoose';
//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import {authenticateUser} from './middleware/authMiddleware.js';
dotenv.config();
const app= express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));



if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}
app.use(express.static(path.resolve(__dirname, "./public")));

app.use(cookieParser());


app.use(express.json()); 

app.get('/',(req,res)=>{
    res.send('hello world');
});


app.get('/api/v1/test',(req,res)=>{
        res.json({mesg:'test route'});
})


app.use('/api/v1/jobs',authenticateUser, jobRouter);
app.use('/api/v1/users',authenticateUser, userRouther);
app.use('/api/v1/auth', authRouth);

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public','index.html'))
})

app.use('*', (req,res)=>{
    res.status(404).json({msg:'not found'});
})

app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5100
try{
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, ()=>{
    console.log(`server is runing on port ${port}`)
})
}catch(error){
    console.log(error);
    process.exit(1);
}

