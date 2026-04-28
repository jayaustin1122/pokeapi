import {
    createUserWithEmailAndPassword as firebaseCreateUser,
    onAuthStateChanged as firebaseOnAuthStateChanged,
    signInWithEmailAndPassword as firebaseSignIn,
    signOut as firebaseSignOut,
    User as FirebaseUser,
    updateProfile
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../core/auth/firebase";
import { User } from "../../domain/models/User";

const getUserDocRef = (uid: string) => doc(db, "users", uid);

const mapFirebaseUser = (
  firebaseUser: FirebaseUser,
  token: string | null = null,
): User => ({
  uid: firebaseUser.uid,
  email: firebaseUser.email,
  displayName: firebaseUser.displayName ?? null,
  idToken: token,
});

const saveUserDocument = async (
  firebaseUser: FirebaseUser,
  token: string | null,
) => {
  const userRef = getUserDocRef(firebaseUser.uid);
  await setDoc(
    userRef,
    {
      email: firebaseUser.email,
      displayName: firebaseUser.displayName ?? null,
      provider: "password",
      lastLoginAt: serverTimestamp(),
      authToken: token,
    },
    { merge: true },
  );
};

export const authRepository = {
  signUpWithEmailAndPassword: async (
    email: string,
    password: string,
    displayName?: string,
  ): Promise<User> => {
    const credential = await firebaseCreateUser(auth, email, password);

    if (displayName) {
      await updateProfile(credential.user, { displayName });
    }

    const token = await credential.user.getIdToken();
    await saveUserDocument(credential.user, token);

    return mapFirebaseUser(credential.user, token);
  },

  signInWithEmailAndPassword: async (
    email: string,
    password: string,
  ): Promise<User> => {
    const credential = await firebaseSignIn(auth, email, password);
    const token = await credential.user.getIdToken();
    await saveUserDocument(credential.user, token);
    return mapFirebaseUser(credential.user, token);
  },

  signOut: async (): Promise<void> => {
    await firebaseSignOut(auth);
  },

  onAuthStateChanged: (callback: (user: User | null) => void): (() => void) => {
    return firebaseOnAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        callback(null);
        return;
      }

      const token = await firebaseUser.getIdToken();
      await saveUserDocument(firebaseUser, token);
      callback(mapFirebaseUser(firebaseUser, token));
    });
  },

  getCurrentIdToken: async (): Promise<string | null> => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      return null;
    }
    return await currentUser.getIdToken();
  },
};
