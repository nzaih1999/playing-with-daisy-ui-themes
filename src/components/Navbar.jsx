import React, { useState } from "react";
import { useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center justify-between p-2">
      <div>
        <button>Home</button>
      </div>
      <div>
        <button
          type="button"
          className="   my-6 rounded bg-gray-300 px-2 py-2 text-right text-[#282C34] transition-all hover:bg-gray-200"
          onClick={handleTheme}
        >
          {theme === "dark" ? (
            <i>
              {" "}
              <FiMoon className="h-5 w-5" />
            </i>
          ) : (
            <FiSun className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
