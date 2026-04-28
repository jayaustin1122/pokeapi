import { authRepository } from "@/data/repositories/authRepositoryImpl";
import { User } from "@/domain/models/User";

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName?: string,
): Promise<User> => {
  return await authRepository.signUpWithEmailAndPassword(
    email,
    password,
    displayName,
  );
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  return await authRepository.signInWithEmailAndPassword(email, password);
};

export const signOutUser = async (): Promise<void> => {
  return await authRepository.signOut();
};

export const observeAuthState = (
  callback: (user: User | null) => void,
): (() => void) => {
  return authRepository.onAuthStateChanged(callback);
};

export const getCurrentIdToken = async (): Promise<string | null> => {
  return await authRepository.getCurrentIdToken();
};
