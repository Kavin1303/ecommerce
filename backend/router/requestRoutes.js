import express from 'express';
import Request from '../models/requestModel.js';
import { getRequests,getRequestById ,createRequest,updateRequest,deleteRequest,getMyRequests} from '../controllers/requestControllers.js';
const router = express.Router();
import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').get(protect,admin,getRequests);
router.route('/mine').get(protect, getMyRequests).post(protect,createRequest).put(protect,updateRequest).delete(protect,deleteRequest);
router.route('/:id').get(protect,getRequestById);

export default router;