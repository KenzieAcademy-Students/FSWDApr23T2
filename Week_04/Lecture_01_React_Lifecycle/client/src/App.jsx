import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = (e) => setCount((curCount) => curCount + 1);

  const handleDecrement = (e) =>
    setCount((curCount) => (curCount > 0 ? curCount - 1 : curCount));

  const handleKeydown = (e) => {
    if (e.key === "ArrowRight") {
      console.log("Right Arrow Pressed");
      handleIncrement();
    } else if (e.key === "ArrowLeft") {
      console.log("Left Arrow Pressed");
      handleDecrement();
    }
  };

  /**
   * When multiple useEffects return cleanup methods (and even if they don't)
   * their effects and cleanup methods will run in the order in which
   * they were defined
   */
  useEffect(() => {
    return () => {
      window.addEventListener("keydown", handleKeydown);
    };
  }, [count]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    // Ok, in the future, when count updates, before running this effect
    // again, "clean it up" first.
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div>
      <button onClick={handleDecrement}>Subtract (-)</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>Add (+)</button>
    </div>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [team1Score, setTeam1Score] = useState(0);
//   const [team2Score, setTeam2Score] = useState(0);
//   const [gameOver, setGameOver] = useState(false);

//   const handleTeam1Shot = (e) => {
//     if (Math.round(Math.random())) {
//       setTeam1Score(team1Score + 1);
//     }
//   };
//   const handleTeam2Shot = (e) => {
//     if (Math.round(Math.random())) {
//       setTeam2Score(team2Score + 1);
//     }
//   };

//   const resetGame = (e) => {
//     setTeam1Score(0);
//     setTeam2Score(0);
//     setGameOver(false);
//   };

//   useEffect(() => {
//     if (team1Score === 20) {
//       alert("TEAM 1 WINS!");
//       setGameOver(true);
//     } else if (team2Score === 20) {
//       alert("TEAM 2 WINS!");
//       setGameOver(true);
//     }
//   }, [team1Score, team2Score]);

//   if (gameOver) {
//     return <button onClick={resetGame}>Game over, reset?</button>;
//   }

//   return (
//     <div>
//       <div>
//         <p>Team 1 {team1Score}</p>
//         <button onClick={handleTeam1Shot}>Shoot</button>
//       </div>
//       <p>vs.</p>
//       <div>
//         <p>{team2Score} Team 2</p>
//         <button onClick={handleTeam2Shot}>Shoot</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(10);

//   const handleIncrement = (e) => {
//     if (count < 20) {
//       setCount(count + 1);
//     }
//   };

//   const handleDecrement = (e) => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   /**
//    * The first argument of useEffect is the effect you wish to occur.
//    * Essentially, define the function you wish to run during one of the
//    * three phases of this component's lifecycle.
//    *
//    * The second argument of useEffect is the dependency array. This array
//    * should contain the values that, after updating, will trigger this
//    * effect to occur. An empty dependency array means that the effect
//    * will **only** occur on the component's **mount**. A populated
//    * dependency array means the effect will run on initial mount **and**
//    * any time any of the dependencies in the array are updated.
//    */
//   useEffect(() => {
//     console.log("Line 31's useEffect");
//     if (count >= 15) {
//       alert("Ease up there, you're getting close to the ceiling.");
//     } else if (count <= 5) {
//       alert("Slow down, don't wanna slam into the floor.");
//     }
//   }, [count]);

//   /**
//    * To perform some effect only on a component's initial mount,
//    * simply call useEffect with an empty dependency array
//    */
//   useEffect(() => {
//     console.log("Line 44's useEffect");
//     alert("Welcome to the counting game!");
//   }, []);

//   return (
//     <div>
//       <span>{count}</span>
//       <div>
//         <button onClick={handleDecrement}>Subtract (-)</button>
//         <button onClick={handleIncrement}>Add (+)</button>
//       </div>
//     </div>
//   );
// }

// export default App;
