import { useState } from "react";
import "../styles/Select.css";

const options = [
  { value: "sans-serif", label: "Sans Serif" },
  { value: "serif", label: "Serif" },
  { value: "mono", label: "Mono" },
];

function Select({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [font, setFont] = useState(options[0]);

  return (
    <div className={className}>
      <div className="selected-font" onClick={() => setIsOpen(!isOpen)}>
        <p className={font.value}>{font.label}</p>
        <img src="./src/assets/images/icon-arrow-down.svg" alt="" />
      </div>
      {isOpen && (
        <ul className="dropdown">
          {options.map((option) => (
            <li
              key={option.value}
              className={option.value}
              onClick={() => {
                setFont(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
