import { pokemonRepository } from "../../data/repositories/pokemonRepositoryImpl";

export const getPokemonList = async () => {
  return await pokemonRepository.getPokemons();
};

export const getPokemonDetails = async (name: string) => {
  return await pokemonRepository.getPokemonDetails(name);
};

export const getPokemonMove = async (name: string) => {
  return await pokemonRepository.getPokemonMove(name);
};
