import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import productRoutes from './router/productRoutes.js';
import connectDB from './config/db.js';
import { notfound,errorHandler } from './middleware/errorMiddleware.js';



const port = process.env.PORT;
connectDB();
const app = express();


app.get('/',(req,res)=>{
    res.send('api is running');
});
app.use('/api/products',productRoutes);
app.use(notfound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`server is running on ${port}`));