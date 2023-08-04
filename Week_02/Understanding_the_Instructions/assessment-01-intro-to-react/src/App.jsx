import ListItem from "./Components/ListItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Shopping List:</h1>
      <ol>
        <ListItem />
        <ListItem />
        <ListItem />
      </ol>
    </div>
  );
}

export default App;
