import React from "react";
import "./ThemeButton.css";

import useTheme from "../../context/themeContext";

const ThemeButton = () => {
  const { themeMode, changeTheme } = useTheme();
  
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          onChange={changeTheme}
          checked={themeMode === "dark"}
        />
        <span className="slider"></span>
      </label>
    </>
  );
};

export default ThemeButton;
