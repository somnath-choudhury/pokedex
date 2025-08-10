import React from "react";

const PokemonCard = ({ pokemonData }) => {
  return (
    <div className="bg-transparent rounded-xl p-2 text-center h-90 w-60 cursor-pointer flex flex-col">
      <figure>
        <img
          src={pokemonData.sprites.other.home.front_default}
          alt={pokemonData.name}
          className="h-50 w-50 items-center"
        />
        <figcaption className="font-semibold text-blue-800 mt-2 capitalize">
          {pokemonData.name}
        </figcaption>
      </figure>

      <p className="text-md text-white bg-green-800 w-fit mx-auto px-3 py-1 text-center justify-items-center rounded-xl">
        {pokemonData.types.map((currType) => currType.type.name).join(", ")}
      </p>

      <p></p>
    </div>
  );
};

export default PokemonCard;
