import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [names, setNames] = useState(["Jacob", "Cayla", "Matthew", "Michael"]);
  const [nameIndex, setNameIndex] = useState(-1);

  function getName() {
      if (nameIndex === -1) {
          return "";
      }
      return names[nameIndex];
  }

  function randomizeName() {
      let newIndex = Math.floor(Math.random() * names.length);
      while (newIndex == nameIndex) {
          newIndex = Math.floor(Math.random() * names.length);
      }
      setNameIndex(newIndex);
  }

  return (
    <div className="App">
        <p>
            {getName()}
        </p>
        <button onClick={randomizeName}>
            Find the decision maker!
        </button>
    </div>
  );
}

export default App;
