import { useEffect, useState } from "react";
import { PokemonDetails } from "../domain/models/Pokemon";
import { getPokemonDetails } from "../domain/usecases/getPokemonList";

export const usePokemonDetails = (name: string) => {
  const [data, setData] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (!name) return;

      setLoading(true);
      try {
        const result = await getPokemonDetails(name);
        setData(result);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return { data, loading };
};
