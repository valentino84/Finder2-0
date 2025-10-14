import { useState } from "react";
import { X } from "lucide-react";

export default function SearchFilterBar() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");

    const handleClear = () => {
        setSearch("");
        setCategory("");
        setCountry("");
    };

    return (
        <div className="w-full flex justify-center p-4 sm:p-6 bg-red-400 ">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-5xl bg-[#111a2e] rounded-2xl px-4 py-4 shadow-md border border-[#1f2a44] transition-all duration-300">
                {/* Search Input */}
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search places by name or description..."
                    className="flex-1 bg-[#0f172a] text-gray-300 placeholder-gray-500 text-sm px-4 py-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />

                {/* Category Dropdown */}
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-white text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-40"
                >
                    <option value="">Category</option>
                    <option value="beach">Beaches</option>
                    <option value="mountain">Mountains</option>
                    <option value="city">Cities</option>
                    <option value="desert">Deserts</option>
                    <option value="spiritual">Spiritual</option>
                </select>

                {/* Country Dropdown */}
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-white text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-40"
                >
                    <option value="">Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="france">France</option>
                    <option value="japan">Japan</option>
                </select>

                {/* Clear Button */}
                <button
                    onClick={handleClear}
                    className="flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-white transition ml-0 sm:ml-2 w-full sm:w-auto py-2"
                >
                    <X size={14} /> Clear
                </button>
            </div>
        </div>
    );
}
