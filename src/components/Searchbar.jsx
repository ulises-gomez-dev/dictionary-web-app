import { useState } from "react";
import "../styles/Searchbar.css";

function Searchbar({ className }) {
  const [word, setWord] = useState(null);

  return (
    <div className={className}> 
      <input type="search" onChange={(e) => setWord(e.target.value)} />
      <span className="search-icon" onClick={() => console.log(word)}>
        <img src="./src/assets/images/icon-search.svg" alt="" />
      </span>
    </div>
  );
}

export default Searchbar;
