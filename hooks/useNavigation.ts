import { useRouter } from "expo-router";
import { Routes } from "../core/navigation/routes";

export const useNavigation = () => {
  const router = useRouter();

  const pushDetails = (name: string, url: string) => {
    router.push({ pathname: Routes.details, params: { name, url } } as any);
  };

  return {
    goToEntry: () => router.replace(Routes.entry as any),
    goToLogin: () => router.replace(Routes.login as any),
    goToSignup: () => router.replace(Routes.signup as any),
    goToTabs: () => router.replace(Routes.tabs as any),
    pushDetails,
    replace: (path: string) => router.replace(path as any),
    push: (path: string) => router.push(path as any),
  };
};
