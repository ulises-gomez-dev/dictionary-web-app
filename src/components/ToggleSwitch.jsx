import { useState } from "react";
import "../styles/ToggleSwitch.css";

function ToggleSwitch({ className }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    const root = document.getElementById("root");

    if (darkMode) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <label className={className}>
      <input type="checkbox" checked={darkMode} onChange={handleDarkMode} />
      <span className="slider"></span>
    </label>
  );
}

export default ToggleSwitch;
