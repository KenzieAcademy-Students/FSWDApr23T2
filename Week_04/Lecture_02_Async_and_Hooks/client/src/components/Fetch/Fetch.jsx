import { useEffect, useState } from "react";

function Fetch() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    /**
     * To send an HTTP request from client side JavaScript, call fetch
     * and pass the url of the expected resource as the argument
     */
    fetch("https://pokeapi.co/api/v2/pokemon")
      /**
       * Because fetch is a promise, we need to define the function that
       * should run when the promise is resolved. In the case of fetch,
       * we actually need to convert the ReadableStream of data into
       * JSON
       */
      .then((response) => response.json())
      /**
       * response.json() is, itself, a promise. The fun part about promises
       * is that they can be chained. So if a promise resolves into
       * another promise, you can chain yet another .then()
       */
      .then((data) => setPokemon(data.results))
      /**
       * What if the promise is NOT resolved? That's where .catch()
       * comes in. .catch() is just like .then(), but only for situations
       * where the promise hits the reject function.
       *
       * In the case of fetch, this effectively means an unsuccessful HTTP request
       * due to either incorrect URL, or incorrect HTTP request method type
       */
      .catch((err) => console.log(err));
  }, []);

  if (pokemon.length === 0) {
    return (
      <div>
        <span>Loading, please wait...</span>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {pokemon.map((pkmn, i) => (
          <li key={`pkmn_${i}`}>{pkmn.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
