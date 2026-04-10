import { useEffect, useState } from "react";
import { PokemonMoveInList } from "../domain/models/PokemonMoves";
import { getPokemonMove } from "../domain/usecases/getPokemonList";

export const usePokemonMoves = (name: string) => {
  const [moves, setMoves] = useState<PokemonMoveInList[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonMoves = async () => {
      if (!name) return;

      setLoading(true);

      try {
        const result = await getPokemonMove(name);
        setMoves(Array.isArray(result) ? result : []);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonMoves();
  }, [name]);

  return { moves, isLoading };
};
