import React, { createContext, useEffect, useState } from "react";



export const ThemeContext = createContext('light');


const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(()=>{
    if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark")
    }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light")
    }
  },[darkMode])

    const value = {
        darkMode,
        setDarkMode
    }

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider