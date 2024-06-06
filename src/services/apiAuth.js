import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const auth = getAuth();

export const signIn = async ({ email, password }) => {
  const data = await signInWithEmailAndPassword(auth, email, password);
  return data;
};

export const signUserOut = async () => {
  await signOut(auth);
};

export const getUser = async () => {
  function getCurrentUser(auth) {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }
  const data = await getCurrentUser(auth);
  return data;
};
