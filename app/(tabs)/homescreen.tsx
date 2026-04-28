import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { Pokemon } from "../../domain/models/Pokemon";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "../../hooks/useNavigation";
import { usePokemon } from "../../hooks/usePokemon";

export default function HomeScreen() {
  const { data, loading } = usePokemon();
  const { user, signOut } = useAuth();
  const { pushDetails, goToLogin } = useNavigation();

  const handlePokemonPress = (pokemon: Pokemon) => {
    pushDetails(pokemon.name, pokemon.url);
  };

  const handleSignOut = async () => {
    await signOut();
    goToLogin();
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
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Pokémon List</Text>
          {user?.email ? (
            <Text style={styles.subtitle}>Signed in as {user.email}</Text>
          ) : null}
          {user?.idToken ? (
            <Text style={styles.tokenText}>Token active</Text>
          ) : null}
        </View>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  tokenText: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  signOutButton: {
    backgroundColor: "#fff",
    borderColor: "#ff0000",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  signOutText: {
    color: "#ff0000",
    fontWeight: "700",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#666",
  },
});
