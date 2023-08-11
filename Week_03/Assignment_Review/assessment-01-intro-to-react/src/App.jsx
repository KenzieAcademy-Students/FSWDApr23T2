import ListItem from "./Components/ListItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Shopping List:</h1>
      <ol>
        <ListItem name="Croquetas" amount="toenails" />
        <ListItem name="Publix Chicken Tender Sub" amount={1} />
        <ListItem name="Carrot sticks" amount={-20} />
      </ol>
    </div>
  );
}

export default App;
