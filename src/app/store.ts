import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../feartures/user/userSilice";
import cartSlice from "../feartures/cart/cartSlice";
import productsSlice from "../feartures/products/productsSlice";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  cart: cartSlice,
  user: authReducer,
  products: productsSlice
});

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
