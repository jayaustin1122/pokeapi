import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";
import { usePokemonMoves } from "../../hooks/usePokemonMoves";

export default function DetailsScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const { data, loading } = usePokemonDetails(name || "");
  const { moves, isLoading } = usePokemonMoves(name || "");

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading Pokémon details...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Pokémon not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
        </Text>
        <Text style={styles.id}>#{data.id.toString().padStart(3, "0")}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              data.sprites.other?.["official-artwork"]?.front_default ||
              data.sprites.front_default,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Height:</Text>
          <Text style={styles.value}>{data.height / 10} m</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Weight:</Text>
          <Text style={styles.value}>{data.weight / 10} kg</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Types:</Text>
          <View style={styles.typesContainer}>
            {data.types.map((type, index) => (
              <View key={index} style={styles.typeBadge}>
                <Text style={styles.typeText}>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Abilities:</Text>
          {data.abilities.map((ability, index) => (
            <Text key={index} style={styles.abilityText}>
              •{" "}
              {ability.ability.name.charAt(0).toUpperCase() +
                ability.ability.name.slice(1)}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Moves (First 10):</Text>
          {isLoading ? (
            <Text style={styles.abilityText}>Loading moves...</Text>
          ) : moves && Array.isArray(moves) && moves.length > 0 ? (
            moves.slice(0, 10).map((move: any, index: number) => (
              <View key={index} style={styles.moveCard}>
                <Text style={styles.moveName}>
                  {move.move?.name?.charAt(0).toUpperCase() +
                    move.move?.name?.slice(1) || "Unknown"}
                </Text>
                {move.version_group_details &&
                  move.version_group_details[0] && (
                    <Text style={styles.moveDetail}>
                      Level:{" "}
                      {move.version_group_details[0].level_learned_at ||
                        "TM/HM"}
                    </Text>
                  )}
              </View>
            ))
          ) : (
            <Text style={styles.abilityText}>No moves found</Text>
          )}
        </View>
      </View>
    </ScrollView>
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
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  id: {
    fontSize: 18,
    color: "#666",
    marginTop: 5,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 12,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  infoContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 18,
    color: "#666",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  typesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  typeBadge: {
    backgroundColor: "#ff0000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  typeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  abilityText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  moveCard: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginVertical: 4,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: "#ff0000",
  },
  moveName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  moveDetail: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  loadingText: {
    fontSize: 18,
    color: "#666",
  },
  errorText: {
    fontSize: 18,
    color: "#ff0000",
  },
});
