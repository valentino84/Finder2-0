import { motion } from "framer-motion";
import { MapPin, MessageCircle, Star, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Places from "./Places";
import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext'
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Comment from './Comment'

export default function FeaturedPlaces1() {

    const { isDark } = useTheme();
    const { demoData } = useContext(ThemeContext);
    const [latestItem, setLatestItem] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        setLatestItem(demoData);
    }, [demoData])

    // console.log(demoData.reviews);


    // Apply filters dynamically
    useEffect(() => {
        let filtered = demoData;

        //  Filter by search
        if (search.trim() !== "") {
            filtered = filtered.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase()) ||
                item.country.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase())
            );
        }


        // Filter by category
        if (category !== "") {
            filtered = filtered.filter(
                (item) => item.category.toLowerCase() === category.toLowerCase()
            );
        }

        //Filter by country
        if (country !== "") {
            filtered = filtered.filter(
                (item) => item.country.toLowerCase() === country.toLowerCase()
            );
        }

        setLatestItem(filtered);
    }, [search, category, country, demoData]);



    const handleClear = () => {
        setSearch("");
        setCategory("");
        setCountry("");
    };

    // console.log("demo " + demoData);
    console.log("list " + latestItem);

    return (
        <>
            <div className=" w-full pt-15 h-50 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <span className="text-5xl font-bold ">Explore Places</span>
                <div className="">Discover amazing destinations, hidden gems, and unforgettable experiences
                    <div> from around the world</div>
                </div>
            </div>
            {/* <SearchFilterBar /> */}
            <div className={`flex justify-center p-4 sm:p-6 ${isDark ? "bg-[#0a1120] text-white" : "bg-gray-50 text-gray-900"
                } `}>
                <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-5xl  rounded-2xl px-4 py-4 shadow-md border ${isDark ? "bg-[#0a1120] text-white" : "bg-gray-50 text-gray-900"
                    } transition-all duration-300`}>
                    {/* Search Input */}
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search places by name or description..."
                        className={`flex-1 ${isDark ? "bg-[#0a1120] text-white" : "bg-gray-50 text-gray-900"
                            }  text-gray-300 placeholder-gray-500 text-sm px-4 py-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 w-full`}
                    />

                    {/* Category Dropdown */}
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-white text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-40"
                    >
                        <option value="">Category</option>
                        <option value="beach">Beaches</option>
                        <option value="Mountains">Mountains</option>
                        <option value="city">Cities</option>
                        <option value="Parks">Parks</option>
                        <option value="Jungle Safari">Jungle Safari</option>
                        <option value="desert">Deserts</option>
                        <option value="Spiritual">Spiritual</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Nature">Nature</option>
                        <option value="Wildlife">Wildlife</option>
                        <option value="Romantic">Romantic</option>
                        <option value="Family">Family</option>
                        <option value="Historical">Historical</option>
                        <option value="Adventure">Adventure</option>
                    </select>

                    {/* Country Dropdown */}
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="bg-white text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-40"
                    >
                        <option value="">Country</option>
                        <option value="india">India</option>
                        <option value="United States">USA</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Indonesia">Indonesia</option>
                    </select>

                    {/* Clear Button */}
                    <button
                        onClick={handleClear}
                        className="flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-red-500 transition ml-0 sm:ml-2 w-full sm:w-auto py-2"
                    >
                        <X size={14} /> Clear
                    </button>
                </div>
            </div>

            {/* fillter End */}

            <section
                className={`py-1 px-8 transition-colors duration-500 ${isDark ? "bg-[#0a1120] text-white" : "bg-gray-50 text-gray-900"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold">All Places</h2>
                        <p className="text-gray-400">
                            Discover the most popular destinations
                        </p>
                    </div>

                </div>

                {/* Cards */}
                {/* <Places /> */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {latestItem.length > 0 ? (
                        latestItem.map((item, index) => (
                            <Places
                                key={index}
                                id={item._id}
                                image={item.image}
                                author={item.owner.name || "Unknown"}
                                comments={item.reviews.length || 0}
                                description={item.description}
                                country={item.country}
                                rating={item.ratings}
                                category={item.category}
                                title={item.title}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-400 py-10">
                            No places found.
                        </p>
                    )}
                </div>

            </section>
            {/* <Comment listingId={latestItem[7]._id} currentUserId={currentUserId} /> */}
        </>
    );
}
