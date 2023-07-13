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
const router = express.Router();

router.route('/').post(registerUser).get(getusers);
router.post('/logout',logoutUser);
router.post('/login',authUser);
router.route('/profile').get(getUserProfile).put(UpdateUser);
router.route('/:id').delete(deleteUser).get(getUserById).put(UpdateUser);
export default router;