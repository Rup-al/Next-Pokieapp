"use client";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mb-2" />
      <h2 className="text-lg font-semibold">{pokemon.name}</h2>
      <a href={`/pokemon/${pokemon.name}`} className="mt-2 text-blue-500">Details →</a>
    </div>
  );
};

export default PokemonCard;