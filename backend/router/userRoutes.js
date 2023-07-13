import express from 'express';
import Product from '../models/userModel.js';
import { authUser,
    registerUser,
    UpdateUser,
    getUserById,
    getUserProfile,
    getusers,
    logoutUser,
    deleteUser} from '../controllers/userControllers.js';
import {protect,admin} from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser).get(getusers);
router.post('/logout',logoutUser);
router.post('/login',authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,UpdateUser);
router.route('/:id').delete(deleteUser).get(getUserById).put(UpdateUser);
export default router;