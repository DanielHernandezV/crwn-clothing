import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
// example of middleware
import { loggerMiddleware } from "./middleware/loguer";

import logger from "redux-logger";
//thunk
import { thunk } from "redux-thunk";

const persistConfig = {
  // persist all
  key: "root",
  storage,
  // wich reducer we dont want persist
  blacklist: ["user", "categories"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//logger not apply on production
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);
// use redux-dev-tools
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//set middlewares
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

// export the persistor
export const persistor = persistStore(store);
