import React from "react";
import "../styles/Definition.css";

export default function Definition({ className, definition }) {
  const { word, phonetic, meanings } = definition[0];
  return (
    <div className={className}>
      <div className="word">
        <h1>{word}</h1>
        <h2>{phonetic}</h2>
      </div>
      {meanings.map((meaning, index) => (
        <Meanings key={index} className="meaning" meaning={meaning} />
      ))}
    </div>
  );
}

function Meanings({ className, meaning }) {
  const { partOfSpeech, definitions, synonyms } = meaning;

  return (
    <div className={className}>
      <div className="divider">
        <h3>{partOfSpeech}</h3>
        <span />
      </div>
      <div className="definitions">
        <h4>Meaning</h4>
        <ul className="list">
          {definitions.map(({ definition, example }, index) => (
            <React.Fragment key={index}>
              <li key={index} className="item">
                {definition}
              </li>
              {example && <p className="example">"{example}"</p>}
            </React.Fragment>
          ))}
        </ul>
      </div>
      {synonyms.length > 0 && (
        <div className="synonyms">
          <h4>Synonyms</h4>
          {synonyms.map((synonym, index) => (
            <p key={index} className="synonym">
              {synonym}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
