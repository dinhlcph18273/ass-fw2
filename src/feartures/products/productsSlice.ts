import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filterProducts, getAllProduct, readProduct } from "../../api/product";

export const getCardProducts = createAsyncThunk(
  "products/getCardProducts",
  async () => {
    try {
      const { data }: any = await getAllProduct();
      return data;
    } catch (error) {}
  }
);
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: any) => {
    const { data } = await readProduct(id);
    return data;
  }
);

export const filter = createAsyncThunk(
  "products/filter", 
  async (cateID:any)=> {
    const {data} = await filterProducts(cateID)
    return data
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    filter: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCardProducts.fulfilled, (state: any, action: any) => {
      state.value = action.payload;
    });
    builder.addCase(getProduct.fulfilled, (state:any, action:any)=> {
        state.value = action.payload
    })
    builder.addCase(filter.fulfilled, (state:any, action:any)=> {
      state.filter = action.payload
    })
  },
});

export default productsSlice.reducer;
