/**
 * Load environment variables safely
 * Similar to Gradle properties in Kotlin
 */

const getRequiredEnv = (key: string): string => {
  const value =
    process.env[`EXPO_PUBLIC_${key}`] || process.env[`REACT_APP_${key}`];

  if (!value) {
    throw new Error(
      `Missing required env var: EXPO_PUBLIC_${key}. ` +
        `Check .env.local file or add to EAS secrets for production.`,
    );
  }

  return value;
};

const getOptionalEnv = (key: string, defaultValue?: string): string => {
  const value =
    process.env[`EXPO_PUBLIC_${key}`] || process.env[`REACT_APP_${key}`];
  return value || defaultValue || "";
};

export const envConfig = {
  // Firebase
  firebase: {
    apiKey: getRequiredEnv("FIREBASE_API_KEY"),
    authDomain: getRequiredEnv("FIREBASE_AUTH_DOMAIN"),
    projectId: getRequiredEnv("FIREBASE_PROJECT_ID"),
    storageBucket: getRequiredEnv("FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: getRequiredEnv("FIREBASE_MESSAGING_SENDER_ID"),
    appId: getRequiredEnv("FIREBASE_APP_ID"),
  },

  // Add other API keys here (same pattern)
  // pokeApi: {
  //   baseUrl: getOptionalEnv("POKEMON_API_BASE_URL", "https://pokeapi.co/api/v2"),
  // },
};
