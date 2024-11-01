import React, { useEffect, useState } from "react";
import { Icons } from "../../assets/icons";

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme}>
      <img
        src={darkMode ? Icons.SunFill : Icons.MoonFill}
        alt=""
        className="w-5 h-5 dark:invert-[1] dark:brightness-[100%]"
      />
    </button>
  );
};

export default ModeCtrl;
