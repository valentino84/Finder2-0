import express from "express";
import { addReview, getReviews, deleteReview } from "../controller/reviewController.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

// Add a review to a listing
router.post("/:listingId", userAuth, addReview);

// Get all reviews for a listing
router.get("/:listingId", getReviews);

// Delete a review (author only)
router.delete("/:reviewId", userAuth, deleteReview);

export default router;
