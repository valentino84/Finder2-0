import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";

export default function ReviewForm({ listingId, onReviewAdded }) {
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);
    const maxChars = 500;
    const { isDark } = useTheme();
    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!rating || !review.trim()) return;

        const token = localStorage.getItem("token"); // get logged-in user token
        if (!token) {
            alert("Please login to submit a review.");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post(
                backendurl + `/api/review/${listingId}`,
                {
                    rating: Number(rating),
                    comment: review.trim(),
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (res.data.success) {
                const onReviewAdded = () => {

                }
            }
            if (res.data.success) {
                // Reset form
                setRating("");
                setReview("");
                // Call parent callback to refresh review list
                if (onReviewAdded) onReviewAdded(res.data.review);
                alert("Review submitted successfully!");
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            console.error("Error submitting review:", err);
            alert("Something went wrong while submitting your review.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-10 mb-5 ">
            <form
                onSubmit={handleSubmit}
                className={`w-full max-w-3xl ${isDark
                    ? "bg-gray-900 border border-gray-600 text-white"
                    : "bg-white border border-gray-600 text-gray-900"
                    } rounded-lg p-8 shadow-md`}
            >
                <h2 className="text-2xl font-semibold mb-6">Share Your Experience</h2>

                <label className="block text-sm font-medium mb-2">
                    Your Rating <span className="text-red-500">*</span>
                </label>

                <div className="mb-6">
                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="w-full text-black border bg-white rounded-md px-4 py-3 shadow-sm focus:outline-none"
                    >
                        <option value="">Select a rating</option>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Very Good</option>
                        <option value="3">3 - Good</option>
                        <option value="2">2 - Fair</option>
                        <option value="1">1 - Poor</option>
                    </select>
                </div>

                <label className="block text-sm font-medium mb-2">
                    Your Review <span className="text-red-500">*</span>
                </label>

                <div className="mb-2">
                    <textarea
                        value={review}
                        onChange={(e) => {
                            if (e.target.value.length <= maxChars) setReview(e.target.value);
                        }}
                        placeholder="Share your thoughts about this place. What did you like? What should others know?"
                        className={`w-full h-40 rounded-md border border-[#2b3b48] ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                            } px-4 py-4 placeholder:text-[#5b6b78] text-[#cbd5e1] resize-none focus:outline-none`}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-sm text-[#98a1ad]">
                        {review.length}/{maxChars} characters
                    </div>

                    <button
                        type="submit"
                        disabled={!rating || !review.trim() || loading}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium shadow-sm transition-opacity disabled:opacity-50 disabled:cursor-not-allowed bg-[#2b5aa6]`}
                    >
                        <span>{loading ? "Submitting..." : "Submit Review"}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 19l9-7-9-7-3 6-6 1 9 7z"
                            />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}
