import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Map, Plus, User, Lock, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const actions = [
    {
        title: "View All Places",
        desc: "Browse through all amazing destinations",
        icon: <Map className="text-blue-400" size={28} />,
        rightIcon: <ArrowRight className="text-gray-400" size={20} />,
        requiresLogin: false,
        path: "/listing",
    },
    {
        title: "Add New Place",
        desc: "Login to share destinations",
        icon: <Plus className="text-green-400" size={28} />,
        rightIcon: <Lock className="text-gray-400" size={20} />,
        requiresLogin: true,
        path: "/addNewPlace",
    },
    {
        title: "My Profile",
        desc: "Create account to start",
        icon: <User className="text-emerald-400" size={28} />,
        rightIcon: <Lock className="text-gray-400" size={20} />,
        requiresLogin: true,
        path: "/myprofile",
    },
];

export default function QuickActions() {
    const { isDark } = useTheme();

    return (
        <section
            className={`py-8  ${isDark ? "text-white " : "text-gray-900 bg-gray-50"
                }  transition-colors duration-100 `}
        >
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Quick Actions</h2>
                <p className="text-gray-400">
                    Get started with these popular actions
                </p>
            </div>

            {/* Action Cards */}
            <div className="flex flex-wrap justify-center gap-6 cursor-pointer  ">
                {actions.map((action, index) => (
                    <NavLink key={index} to={action.path} className="no-underline rounded-2xl border-blue-100 shadow-lg hover:inset-shadow-sm  hover:shadow-blue-500/50">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0 }}
                            whileHover={{
                                y: -6,
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                            }}
                            className={`relative w-80 md:w-96 p-6 rounded-2xl ${isDark
                                ? "bg-gradient-to-br from-[#1a2235] to-[#141b2a] shadow-lg border border-[#2a3550]/40 hover:shadow-blue-500/50"
                                : "bg-white border-blue-100 shadow-lg   hover:shadow-blue-500/50"
                                } `}
                        >
                            <div className="flex items-start justify-between mb-6">
                                {action.icon}
                                {action.rightIcon}
                            </div>

                            <h3
                                className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {action.title}
                            </h3>
                            <p
                                className={`mb-3 ${isDark ? "text-gray-300" : "text-gray-500"
                                    }`}
                            >
                                {action.desc}
                            </p>

                            {action.requiresLogin && (
                                <div className="flex items-center text-gray-500 text-sm">
                                    <User size={14} className="mr-2 text-emerald-400" />
                                    <span>Login Required</span>
                                </div>
                            )}
                            {!action.requiresLogin && (
                                <div className="flex items-center text-gray-500 text-sm">
                                    <User size={14} className="mr-2 text-emerald-400" />
                                    <span>No Login Required</span>
                                </div>
                            )}
                        </motion.div>
                    </NavLink>
                ))}
            </div>
        </section>
    );
}
