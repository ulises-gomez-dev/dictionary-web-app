import { useState } from "react";
import getWordDefinitions from "./services/dictionaryapi";
import { Navbar, Searchbar, NotFound } from "./components";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [status, setStatus] = useState(null); // Ex: 'typing', 'submitting', or 'success'
  const [error, setError] = useState(false);

  const handleQueryChange = (e) => {
    setWord(e.target.value);
  };

  const handleQuerySearch = () => {
    getWordDefinitions(word).then((result) => setDefinition(result));
  };

  return (
    <div className="dictionary">
      <Navbar className="navbar" />
      <Searchbar
        className="searchbar"
        handleQueryChange={handleQueryChange}
        handleQuerySearch={handleQuerySearch}
      />
      {definition !== null ? (
        <></>
      ) : error ? (
        <NotFound className="notfound" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
