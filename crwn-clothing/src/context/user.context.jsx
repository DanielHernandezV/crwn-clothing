import { createContext } from "react";
import { useState, useEffect } from "react";
import {
  onAthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// da acceso al usuario ({currentUser,setCurrentUser}) y a la funcion de setstate a todos los componentes
//hijos de UserProvider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubcribe = onAthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubcribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
