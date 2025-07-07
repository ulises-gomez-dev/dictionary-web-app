import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import "./App.css";

function App() {
  return (
    <div className="dictionary">
      <Navbar className="navbar"/>
      <Searchbar className="searchbar"/>
    </div>
  );
}

export default App;
