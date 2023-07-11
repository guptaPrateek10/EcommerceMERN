import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducers = combineReducers({ cart: cartReducer, user: userReducer });
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);
