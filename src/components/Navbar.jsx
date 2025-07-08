import ToggleSwitch from "./ToggleSwitch";
import Select from "./Select";
import "../styles/Navbar.css";

function Navbar({ className }) {
  return (
    <div className={className}>
      <img src="./src/assets/images/logo.svg" alt="" />
      <div className="modes">
        <Select className="select" />
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
