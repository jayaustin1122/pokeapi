import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Pokemon } from "../domain/models/Pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
  onPress: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
