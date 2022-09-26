import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Hydration safe code
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="transition duration-500 ease-in-out rounded-full w-10">
      <BsFillSunFill
        onClick={toggleTheme}
        className="hidden dark:block text-gray-50 dark:text-gray-400 text-4xl cursor-pointer"
      />
      <FaMoon
        onClick={toggleTheme}
        className="dark:hidden text-slate-700 dark:text-gray-400 text-4xl cursor-pointer"
      />
      {/* {theme === "dark" ? (
        <FaSun
          onClick={toggleTheme}
          className="text-gray-50 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={toggleTheme}
          className="text-slate-700 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )} */}
    </div>
  );
};

export default ToggleThemeButton;
