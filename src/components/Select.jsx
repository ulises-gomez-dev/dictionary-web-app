import { useState } from "react";
import "../styles/Select.css";

const options = [
  { value: "sans-serif", label: "Sans Serif" },
  { value: "serif", label: "Serif" },
  { value: "mono", label: "Mono" },
];

function Select({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <div className="selected-font" onClick={() => setIsOpen(!isOpen)}>
        <p className={options[0].value}>{options[0].label}</p>
        <img src="./src/assets/images/icon-arrow-down.svg" alt="" />
      </div>
      {isOpen && (
        <ul className="dropdown">
          {options.map((option) => (
            <li key={option.value} className={option.value}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
