import { useState } from "react";
import getWordDefinitions from "./services/dictionaryapi";
import { Navbar, Searchbar, NotFound, Definition } from "./components";
import "./App.css";

function App() {
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(false);

  const handleWordSearch = (data) => {
    const word = data.get("word");

    getWordDefinitions(word).then((result) => {
      if (!result) {
        setDefinition(null);
        setError(true);
      } else {
        setDefinition(result);
        setError(false);
      }
    });
  };

  return (
    <div className="dictionary">
      <Navbar className="navbar" />
      <Searchbar className="searchbar" handleWordSearch={handleWordSearch} />
      {definition ? (
        <Definition className="definition" definition={definition} />
      ) : error ? (
        <NotFound className="notfound" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
