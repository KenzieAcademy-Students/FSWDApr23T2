import { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    dog: "",
    adopted: [],
  });

  return (
    <div className="App">
      <header>
        <h1>Doggie Speed Dating</h1>
        <h3>
          Press the arrow keys on your keyboard. Left to skip, Right to Adopt.
        </h3>
      </header>
      <section></section>
    </div>
  );
};

export default App;
