import "./App.css";
import { useState } from "react";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState(false);
  const [meaning, setMeaning] = useState("");

  const handleSearch = () => {
    const res = dictionary.find((obj) => obj.word.toLowerCase() === text.toLowerCase());
    if (res) {
      setMeaning(res.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
    setSearch(true);
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          setSearch(false);
        }}
        placeholder="Search for a word..."
      />
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      {text && search && <div>{meaning}</div>}
    </div>
  );
}

export default App;
