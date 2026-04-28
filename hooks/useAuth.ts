import { useAuthContext } from "../core/auth/AuthContext";

export const useAuth = () => {
  return useAuthContext();
};
