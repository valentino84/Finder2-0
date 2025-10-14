import { motion } from "framer-motion";
import { MapPin, Globe, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const stats = [
    {
        title: "Total Places",
        value: 247,
        icon: <MapPin className="text-blue-400" size={22} />,
        growth: "+12%",
        color: "from-purple-500 to-fuchsia-500",
    },
    {
        title: "Countries",
        value: 45,
        icon: <Globe className="text-green-400" size={22} />,
        growth: "+12%",
        color: "from-emerald-500 to-green-600",
    },
    {
        title: "Reviews",
        value: "1,823",
        icon: <MessageSquare className="text-emerald-400" size={22} />,
        growth: "+12%",
        color: "from-orange-500 to-amber-500",
    },
];

export default function StatsCards() {
    const { isDark } = useTheme();

    return (
        <div className="flex flex-wrap justify-center gap-6  p-3  ">
            {stats.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{
                        y: -6,
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                    }}
                    className={` md:w-95  relative w-80 p-6 rounded-2xl 
                        ${isDark
                            ? 'bg-gradient-to-br from-[#1a2235] to-[#141b2a] shadow-lg border border-[#2a3550]/40 hover:shadow-blue-500/50  '
                            : "bg-white border-1 border-blue-100 shadow-lg hover:shadow-blue-500/50"

                        }
                         `}
                >
                    <div className="flex items-center justify-between">
                        <h3 className={`${isDark ? "text-gray-300 " : "text-gray-600"} text-lg font-medium`}>{item.title}</h3>
                        {item.icon}
                    </div>

                    <div className="mt-3 flex items-baseline gap-3">
                        <span className={` ${isDark ? "text-gray-100 " : "text-gray-700 "} text-5xl font-bold `}>{item.value}</span>
                        <span className="text-green-400 font-semibold text-sm">
                            ↑ {item.growth}
                        </span>
                    </div>

                    <div className="mt-4 h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${item.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
