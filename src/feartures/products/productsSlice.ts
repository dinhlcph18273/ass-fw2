import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { filterProducts, getAllProduct, readProduct } from "../../api/product";

export const getCardProducts = createAsyncThunk(
  "products/getCardProducts",
  async () => {
    try {
      const { data } = await getAllProduct();
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
  async (categoryId: any) => {
    const { data } = await filterProducts(categoryId);
    return data;
  }
);

export const getProductByCategory = createAsyncThunk(
  "product/getProductByCategory",
  async (cateId: any) => {
    try {
      if (cateId != 0) {
        const { data } = await axios.get(
          `http://localhost:3001/categories/${cateId}?_embed=products`
        );
        return data.products;
      } else {
        const { data } = await axios.get(`http://localhost:3001/products`);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const filterProductByname = createAsyncThunk(
  "product/filterProductByname",
  async (key: any) => {
    const { data } = await axios.get(
      `http://localhost:3001/products?q=${key}&_limit=5`
    );
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    product: {},
    valueByCategory: [],
    valueBySearch: [],
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getCardProducts.fulfilled, (state: any, action: any) => {
      state.value = action.payload;
    });
    builder.addCase(getProduct.fulfilled, (state: any, action: any) => {
      state.product = action.payload;
    });
    builder.addCase(filter.fulfilled, (state: any, action: any) => {
      state.value = action.payload;
    });
    builder.addCase(
      filterProductByname.fulfilled,
      (state: any, action: any) => {
        state.valueBySearch = action.payload;
      }
    );
    builder.addCase(
      getProductByCategory.fulfilled,
      (state: any, action: any) => {
        state.value = action.payload;
      }
    );
  },
});

export default productsSlice.reducer;
