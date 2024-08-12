// import { createContext } from "react";
// import { useEffect, useReducer } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";
// import {
//   onAthStateChangedListener,
//   createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";

// // actual value
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// // react reducer structure example
// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };

//     default:
//       throw new Error(`Unhandled type ${type} in the userReducer`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// // da acceso al usuario ({currentUser,setCurrentUser}) y a la funcion de setstate a todos los componentes
// //hijos de UserProvider
// export const UserProvider = ({ children }) => {
//   /*  const [currentUser, setCurrentUser] = useState(null); */

//   //reducer
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const setCurrentUser = (user) => {
//     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//   };

//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unSubcribe = onAthStateChangedListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unSubcribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
