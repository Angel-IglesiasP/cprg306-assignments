"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() 
{
    const {theme, setTheme} = useTheme();
    return( 
    <button className="px-6 py-6 rounded-full bg-gray-100 dark:bg-gray-800 text-2xl shadow-xl" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "☀️" : "🌑"}
    </button>
    );
}
