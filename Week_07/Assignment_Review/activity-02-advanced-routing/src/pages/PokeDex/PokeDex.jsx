import { Link, Outlet } from "react-router-dom";
import "./PokeDex.css";
import usePokedex from "./usePokedex";

const PokeDex = () => {
  /**
   * Custom hooks sure are magical, aren't they?
   */
  const pokedexEntries = usePokedex();

  return (
    <div className="pokedex">
      <div className="pokemon-list">
        <h2>Pokemon:</h2>
        <ul>
          {pokedexEntries &&
            pokedexEntries.map((pokemon, index) => {
              return (
                <li key={index}>
                  <Link to={`/pokedex/${pokemon.name}`}>
                    {pokemon.name.toUpperCase()}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="selected-pokemon">
        <Outlet />
      </div>
    </div>
  );
};

export default PokeDex;
