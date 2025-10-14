import mongoose from "mongoose";
import review from "./reviewModel.js";
import user from "./userModel.js";

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review", 
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",   // ✅ Capital U
    },




});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await mongoose.model("Review").deleteMany({ _id: { $in: listing.reviews } });
    }
});


const Listing = mongoose.model("listing", listingSchema) || mongoose.model.Listing;

export default Listing;
// export default mongoose.model("Product", producrtSchema) || mongoose.model.Product;