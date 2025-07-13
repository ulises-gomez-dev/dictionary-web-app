import { useState } from "react";
import "../styles/Select.css";

const options = [
  { value: "sans-serif", label: "Sans Serif", id: 0 },
  { value: "serif", label: "Serif", id: 1 },
  { value: "mono", label: "Mono", id: 2 },
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
                const root = document.getElementById("root");
                root.classList.remove(font.value)
                root.classList.add(option.value);
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
