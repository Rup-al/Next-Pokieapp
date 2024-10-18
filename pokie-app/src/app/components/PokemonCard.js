"use client";

const PokemonCard = ({ pokemon }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="border rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <div className="bg-white w-full p-2 rounded-t-lg flex justify-center">
        <img src={pokemon.image} alt={pokemon.name} className="w-36 h-36" />
      </div>
      <div className="bg-[#FAFAFA] w-full p-4 rounded-b-lg text-left">
        <h2 className="text-lg font-semibold">{capitalizeFirstLetter(pokemon.name)}</h2>
        <a
          href={`/pokemon/${pokemon.name}`}
          className="mt-20 text-blue-500 block"
        >
          Details →
        </a>
      </div>
    </div>
  );
};

export default PokemonCard;