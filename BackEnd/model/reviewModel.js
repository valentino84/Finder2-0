// reviewModel.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    comment: { type: String, required: true },
    listing: { type: Schema.Types.ObjectId, ref: "Listing", required: true },
  },
  { timestamps: true }
);


const Review = mongoose.model("Review", reviewSchema);
export default Review;
