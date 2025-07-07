import ToggleSwitch from "./ToggleSwitch";
import "../styles/Navbar.css";

function Navbar({ className }) {
  const font = "sans-serif";

  return (
    <div className={className}>
      <img src="./src/assets/images/logo.svg" alt="" />
      <div className="modes">
        <button className={`font ${font}`}>Sans Serif</button>
        <span className="line"></span>
        <div className="theme">
          <ToggleSwitch className="switch" />
          <img src="./src/assets/images/icon-moon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
