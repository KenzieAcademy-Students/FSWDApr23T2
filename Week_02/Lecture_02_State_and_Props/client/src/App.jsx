import React from "react";
import RubberDuck from "./components/RubberDuck";
import "./App.css";

function App() {
  return (
    <div>
      <RubberDuck
        name="Saint XIV"
        color="silver and purple"
        franchise="Destiny"
        age={3}
      />
      <RubberDuck name="Snorlax" color="blue" franchise="Pokemon" age={5} />
      <RubberDuck
        name="Queen Quackers"
        color="yellow and purple"
        franchise="no"
        age={6}
      />
    </div>
  );
}

export default App;
