import { createContext, useContext, useEffect, useState } from "react";
// import places from "../assets/demo";
import axios from "axios";
import { toast } from 'react-toastify';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const backendurl = "https://finder2-0-backend.onrender.com";
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
    const [demoData, setDemoData] = useState([]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    // Apply dark/light class to <html> for Tailwind
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    // Load demo data once
    // useEffect(() => {
    //     setDemoData(places);
    // }, []);

    const getlistingData = async () => {
        try {
            const response = await axios.get(backendurl + '/api/listing/list');
            // console.log(response.data.listings.reviews);
            if (response.data.success) {
                setDemoData(response.data.listings);
            }
            else {
                toast.error('Product Not Found');
            }
        } catch (error) {
            toast.error('Product Not Found');
        }
    }






    useEffect(() => {
        getlistingData();
        // const interval = setInterval(() => {
        //     getlistingData();
        // }, 1000);

        // return () => clearInterval(interval);

    }
        , [])

    // console.log(demoData)

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, demoData, getlistingData }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);
