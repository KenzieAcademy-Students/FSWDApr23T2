import { Route, Routes } from "react-router-dom";
import { Home, PokeDex } from "./pages";
import { Navigation, PokemonCard } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="pokedex" element={<PokeDex />}>
          <Route path=":name" element={<PokemonCard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
