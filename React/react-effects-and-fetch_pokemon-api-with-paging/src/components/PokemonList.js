import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setpokemonId] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${pokemonId}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [pokemonId]);

  if (!pokemon) {
    return null;
  }

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setpokemonId((pokemonId) => pokemonId - 1);
        }}
        disabled={pokemonId === 0}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setpokemonId((pokemonId) => pokemonId + 1);
          // hier wird nicht eine Seite neu geladen, sondern nur ein item.
          // für eine neue Seite müsste es +-20 sein
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
