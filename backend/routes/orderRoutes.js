import express from "express";
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateToPaid,
    updateToDelivered,
    getOrders
 } from "../controllers/orderController.js";
 import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, admin, getOrderById);
router.route('/:id/pay').put(protect, updateToPaid);
router.route('/:id/deliver').put(protect, admin, updateToDelivered);

export default router;