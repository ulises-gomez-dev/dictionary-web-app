import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ className }) {
  const font = "sans-serif";

  const [showSelect, setShowSelect] = useState(false);

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };

  return (
    <div className={className}>
      <img src="./src/assets/images/logo.svg" alt="" />
      <div className="modes">
        <button className={`font ${font}`}>Sans Serif</button>
        <div className="theme">
          <ToggleSwitch className="switch" />
          <img src="./src/assets/images/icon-moon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
