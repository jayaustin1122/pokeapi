import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useNavigation } from "../hooks/useNavigation";

export default function EntryScreen() {
  const { user, initializing } = useAuth();
  const { goToTabs, goToLogin } = useNavigation();

  useEffect(() => {
    if (!initializing) {
      if (user) {
        goToTabs();
      } else {
        goToLogin();
      }
    }
  }, [initializing, user, goToLogin, goToTabs]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon App</Text>
      <Text style={styles.subtitle}>Preparing your experience…</Text>
      <ActivityIndicator size="large" color="#ff0000" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ff0000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  loader: {
    marginTop: 16,
  },
});
