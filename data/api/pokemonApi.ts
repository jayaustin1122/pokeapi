import { axiosInstance } from "./axiosInstance";

export const pokemonApi = {
  getPokemonList: async () => {
    try {
      console.log("Making API call to get Pokemon list");
      const response = await axiosInstance.get("pokemon");
      return response.data;
    } catch (error) {
      console.error("Error in getPokemonList:", error);
      throw error;
    }
  },

  getPokemonDetails: async (name: string) => {
    try {
      console.log(`Making API call to get Pokemon details for ${name}`);
      const response = await axiosInstance.get(`pokemon/${name}`);
      return response.data;
    } catch (error) {
      console.error("Error in getPokemonDetails:", error);
      throw error;
    }
  },

  getPokemonMove: async (name: string) => {
    try {
      console.log(`Making API call to get Pokemon data for ${name}`);
      const response = await axiosInstance.get(`pokemon/${name}`);
      // Extract moves from pokemon data
      return response.data.moves || [];
    } catch (error) {
      console.error("Error in getPokemonMove:", error);
      throw error;
    }
  },
};
