import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "../../api/product";

export const getCardProducts = createAsyncThunk("products/getCardProducts", async () => {
  try {
    const { data }: any = await getAllProduct();
    return data;
  } catch (error) {}
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCardProducts.fulfilled, (state: any, action: any) => {
      state.value = action.payload;
    });
  },
});

export default productsSlice.reducer;
