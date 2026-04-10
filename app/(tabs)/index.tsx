import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { Pokemon } from "../../domain/models/Pokemon";
import { usePokemon } from "../../hooks/usePokemon";

export default function HomeScreen() {
  const { data, loading } = usePokemon();
  const router = useRouter();

  const handlePokemonPress = (pokemon: Pokemon) => {
    router.push({
      pathname: "/(tabs)/details",
      params: { name: pokemon.name, url: pokemon.url },
    });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading Pokémon...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon List</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onPress={() => handlePokemonPress(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  loadingText: {
    fontSize: 18,
    color: "#666",
  },
});
