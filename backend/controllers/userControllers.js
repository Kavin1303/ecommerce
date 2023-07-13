import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authUser = asyncHandler(async(req,res) =>{
    const { email, password } = req.body;

  const user = await User.findOne({ email });

  if(user && (await user.matchPassword(password))) {
    const token = jwt.sign({userId: user._id},process.env.JWT_SECRET,{
        expiresIn : '2d'
    });

    res.cookie('jwt', token,{
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite:'strict',
        maxAge : 2*24*60*60*1000,
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } 
  else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async(req,res) =>{
    res.send('register user');
});

const logoutUser = asyncHandler(async(req,res) =>{
    res.send('logout user');
});

const getUserProfile = asyncHandler(async(req,res) =>{
    res.send('user Profile');
});
const UpdateUser = asyncHandler(async(req,res) =>{
    res.send('update user');
});

const getusers = asyncHandler(async(req,res) =>{
    res.send('get users');
});

const getUserById= asyncHandler(async(req,res) =>{
    res.send('get user');
});

const deleteUser = asyncHandler(async(req,res) =>{
    res.send('delete user');
});

export {
    authUser,
    registerUser,
    UpdateUser,
    getUserById,
    getUserProfile,
    getusers,
    logoutUser,
    deleteUser
};




