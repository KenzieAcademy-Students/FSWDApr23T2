import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  /**
   * NOTE: The audio should be done in the Team component,
   * not the App component. This is here just as an example
   * of audio sounds in React
   */
  const [shootSound] = useState(new Audio("./shoot.mp3"));
  const [scoreSound] = useState(new Audio("./score.mp3"));

  const shoot = () => {
    setCount(count + 1);
    // When we shoot, we should determine which sound
    // should play.
    stopAudio();
    // insert shotsTaken increment here

    if (Math.round(Math.random())) {
      // insert your score increment here
      scoreSound.play();
    } else {
      shootSound.play();
    }
  };

  const stopAudio = () => {
    shootSound.pause();
    shootSound.currentTime = 0;

    scoreSound.pause();
    scoreSound.currentTime = 0;
  };

  return (
    <div className="App">
      <h1>Welcome to the sports game starter</h1>
      <button onClick={shoot}>Shoot</button>
    </div>
  );
}

export default App;
