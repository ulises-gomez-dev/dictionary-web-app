import "../styles/Searchbar.css";

function Searchbar({ className }) {
  return (
    <div className={className}>
      <input type="search" />
      <span className="search-icon">
        <img src="./src/assets/images/icon-search.svg" alt="" />
      </span>
    </div>
  );
}

export default Searchbar;
