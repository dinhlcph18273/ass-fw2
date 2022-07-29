import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Cart/CartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store