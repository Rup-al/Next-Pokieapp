
"use client";


import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/common/SearchBar';
import FilterBar from './components/common/FilterBar';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const [pokemonRes, typesRes] = await Promise.all([
        fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()),
        fetch('https://pokeapi.co/api/v2/type').then(res => res.json()),
      ]);

      const pokemonData = await Promise.all(
        pokemonRes.results.map(async (pokemon) => {
          const pokemonDetail = await fetch(pokemon.url).then(res => res.json());
          return {
            ...pokemon,
            image: pokemonDetail.sprites.front_default,
            types: pokemonDetail.types,
          };
        })
      );

      setPokemons(pokemonData);
      setFilteredPokemons(pokemonData);
      setTypes(typesRes.results.map((type) => type.name));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(searchTerm) &&
      (selectedType ? pokemon.types.some((t) => t.type.name === selectedType) : true)
    );
    setFilteredPokemons(filtered);
  }, [searchTerm, selectedType]);

  return (
    <div className="p-12">
      <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
        <div className="flex flex-col space-y-4">
          <SearchBar onSearch={setSearchTerm} />
          <FilterBar types={types} onFilter={setSelectedType} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;