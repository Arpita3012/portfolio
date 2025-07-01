import { useEffect, useState } from "react";
import {Moon,Sun} from "lucide-react";
import {cn} from "@/lib/utils";

export const ThemeToggle=()=>{
    const [isDarkMode, setIsDarkMode]=useState(false);

        useEffect(() => {
            const storedTheme = localStorage.getItem("theme");

            if (storedTheme === "dark" || storedTheme === null) {  
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");               
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove("dark");   
                setIsDarkMode(false);
            }
        }, []);


    const toggleTheme=()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    };

    return <button onClick={toggleTheme} className={cn(
            "fixed z-50 p-2 rounded-full transition-colors duration-300",
            "top-5 right-5 sm:top-5 sm:right-5", 
            "max-sm:bottom-5 max-sm:right-4"    
        )}

    > 
            {" "}
            {isDarkMode? (
                <Sun className="h-6 w-6 text-yellow-500"/> ):(
                <Moon className="h-6 w-6 text-gray-500" />
            )}
        </button>
};