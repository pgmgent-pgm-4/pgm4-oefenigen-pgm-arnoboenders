import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDarkMode]);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {isDarkMode ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
}
