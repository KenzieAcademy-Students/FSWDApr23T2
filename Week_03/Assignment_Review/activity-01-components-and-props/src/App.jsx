import TouristDestinations from "./TouristDestinations";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Potato</h1>
      <TouristDestinations
        name="Pinecrest Bakery"
        city="Pinecrest"
        state="FL"
      />
      <TouristDestinations name="Loandepot Park" city="Miami" state="FL" />
      <TouristDestinations name="Yankee Stadium" city="Bronx" state="NY" />
    </div>
  );
}

export default App;
