import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import productRoutes from './router/productRoutes.js';
import userRoutes from './router/userRoutes.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import { notfound,errorHandler } from './middleware/errorMiddleware.js';



const port = process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('api is running');
});

app.use('/api/products',productRoutes);
app.use('/api/user',userRoutes)
app.use(notfound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`server is running on ${port}`));