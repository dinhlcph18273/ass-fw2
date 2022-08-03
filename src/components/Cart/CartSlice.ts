import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
    total: 0,
  },
  reducers: {
    add: (state: any, action: any) => {
      const exitItem = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      if (!exitItem) {
        state.cart.push(action.payload);
      } else {
        exitItem.amount = exitItem.amount ? exitItem.amount + 1 : 2;
      }
      state.total = state.cart.reduce(
        (acc: any, item: any) =>
          item.total ? acc + item.total : acc + item.saleOffPrice,
        0
      );
    },
    increase: (state: any, action: any) => {
      const current = state.cart.find(
        (item: any) => item.id === action.payload
      );
      current.amount = current.amount ? current.amount + 1 : 2;
      current.total = current.saleOffPrice * current.amount;
      state.total = state.cart.reduce(
        (acc: any, item: any) =>
          item.total ? acc + item.total : acc + item.saleOffPrice,
        0
      );
    },
    decrease: (state: any, action: any) => {
      const current = state.cart.find(
        (item: any) => item.id === action.payload
      );
      current.amount = current.amount ? current.amount - 1 : 0;
      if (current.amount < 1) {
        const confirm = window.confirm("Bạn có chắc muốn xóa");
        if (confirm) {
          state.cart = state.cart.filter(
            (item: any) => item.id !== current.id
          );
        }
      }
      current.total = current.amount * current.saleOffPrice;
      state.total = state.cart.reduce(
        (acc: any, item: any) =>
          item.total ? acc + item.total : acc + item.saleOffPrice,
        0
      );
    },
  },
  extraReducers: {},
});

export default cartSlice;
