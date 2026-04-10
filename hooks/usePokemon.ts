import { useEffect, useState } from "react";
import { Pokemon } from "../domain/models/Pokemon";
import { getPokemonList } from "../domain/usecases/getPokemonList";

export const usePokemon = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const result = await getPokemonList();
      setData(result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { data, loading };
};
