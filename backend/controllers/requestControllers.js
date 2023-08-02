import asyncHandler from "../middleware/asyncHandler.js";
import Request from '../models/requestModel.js';


const getRequests = asyncHandler(async(req,res) =>{
    const pageSize = 3;
    const page = Number(req.query.pageNumber)||1;
    const count = await Request.countDocuments({});


    const requests = await Request.find({}).populate('user','name')
        .limit(pageSize)
        .skip(pageSize*(page-1));
    res.json({requests, page, pages:Math.ceil(count/pageSize)});
});

const getRequestById = asyncHandler(async(req,res) =>{
    const request = await Request.findById(req.params.id);
    if(request){
        res.json(request);
    }
    res.staus(404);
    throw new Error('Request not found');
});
const createRequest = asyncHandler(async(req,res) =>{
    const request = new Request({
        name:'sample name',
        user:req.user._id,
        brand:'sample brand',
        category:'sample category',
        countInStock:0,
        description: 'sample description',
        address:'Sample Address',
    })
    const createdRequest = await request.save();
    res.status(201).json(createdRequestt);
});

const updateRequest = asyncHandler(async(req,res) =>{
   const {name,description,brand,category,countInStock,address} = req.body;
   const request = await request.findById(req.params.id);
   if(request){
    request.name = name;
    request.brand = brand;
    request.category = category;
    request.countInStock = countInStock;
    request.description= description;
    request.address = address;

    const updatedRequest = await request.save();
    res.status(200).json(updatedRequest)
   } else{
    res.stauts(404);
    throw new Error('Resource not found');
   }
});

const deleteRequest = asyncHandler(async(req,res) =>{
    const request = await Request.findById(req.params.id);
    if(request){
     await Request.deleteOne({_id: product._id});
     res.json({message: 'Request removed'});
    } else{
     res.status(404);
     throw new Error('Resource not found');
    }
 });
 
 const getMyRequests = asyncHandler(async (req, res) => {
    const requests = await Request.find({ user: req.user._id });
    res.json(requests);
});
 

export { getRequests,getRequestById ,createRequest,updateRequest,deleteRequest,getMyRequests};