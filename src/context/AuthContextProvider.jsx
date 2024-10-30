import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("must be used in auth context provider");
  return ctx;
};

function AuthContextProvider({ children }) {
  const [account, setAccount] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          setAccount(null);
          return;
        }
        const { uid } = user;
        setAccount(uid);
      },
      (error) => console.error(error)
    );
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, logout, account }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
