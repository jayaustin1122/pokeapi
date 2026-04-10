import { PokemonMove } from "@/domain/models/PokemonMoves";
import { Pokemon, PokemonDetails } from "../../domain/models/Pokemon";
import { pokemonApi } from "../api/pokemonApi";

export const pokemonRepository = {
  getPokemons: async (): Promise<Pokemon[]> => {
    const data = await pokemonApi.getPokemonList();

    return data.results.map((item: any) => ({
      name: item.name,
      url: item.url,
    }));
  },

  getPokemonDetails: async (name: string): Promise<PokemonDetails> => {
    const data = await pokemonApi.getPokemonDetails(name);
    return data;
  },

  getPokemonMove: async (name: string): Promise<PokemonMove> => {
    const data = await pokemonApi.getPokemonMove(name);
    return data;
  },
};
