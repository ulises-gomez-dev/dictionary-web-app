import "../styles/Searchbar.css";

function Searchbar({ className, handleQueryChange, handleQuerySearch }) {

  return (
    <div className={className}>
      <input type="search" onChange={handleQueryChange} />
      <span className="search-icon" onClick={handleQuerySearch}>
        <img src="./src/assets/images/icon-search.svg" alt="" />
      </span>
    </div>
  );
}

export default Searchbar;
