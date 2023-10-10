import "./App.css";
import Game from "./components/Game";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the sports game starter</h1>
      <Game venue="FLA Live Arena" />
    </div>
  );
}

export default App;
