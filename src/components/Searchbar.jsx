import "../styles/Searchbar.css";

function Searchbar({ className, handleWordSearch }) {
  return (
    <form className={className} action={handleWordSearch}>
      <input type="search" name="word" placeholder="Search for any word..." />
      <span className="search-icon" type="submit">
        <img src="./src/assets/images/icon-search.svg" alt="" />
      </span>
    </form>
  );
}

export default Searchbar;
