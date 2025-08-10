import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=60";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('')

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponses);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false); // always stop loading, even if error
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //search function
  const searchPokemon = pokemon.filter((currPokemon) => {
    return currPokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  if (loading) {
    return (
      <div className="text-center py-8">
        <h1>Content is loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="text-lg font-bold mb-4">Hello there Trainer</div>
      <div className="text-center mb-10">
        <input
          className="p-3 w-64 rounded-full border-4 border-black bg-white text-red-600 font-bold text-lg text-center shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400 transition-all duration-300 placeholder-red-300"
          type="text"
          placeholder="🔍 Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {searchPokemon.map((currPokemon) => (
          <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
        ))}
      </div>
    </>
  );
};  

export default Pokemon;
