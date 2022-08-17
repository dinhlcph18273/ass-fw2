import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
import { RootState } from "../../app/store";

export const orderCart = createAsyncThunk(
  "cart/orderCart",
  async (order:any) => {
    await axios.post(`http://localhost:3001/order`,order)
  }
)

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cart: [],
    total: 0,
  },
  reducers: {
    addProductToCart: (state: any, action: any) => {
      const check = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      if (check) {
        const newCart = state.cart.map((item: any) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total_price: (item.quantity + 1) * item.price,
              }
            : item
        );
        message.success("Thêm thành công !!");
        return (state = {
          ...state,
          cart: newCart,
          total: newCart.reduce(
            (accu: any, item: any) => accu + item.total_price,
            0
          ),
        });
      } else {
        const newCart = [...state.cart, action.payload];
        message.success("Thêm thành công !!");
        return (state = {
          ...state,
          cart: newCart,
          total: newCart.reduce((accu, item) => accu + item.total_price, 0),
        });
      }
    },
    incProductToCart: (state: any, action: any) => {
      const inc = state.cart.map((item: any) =>
        item.id == action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total_price: (item.quantity + 1) * item.price,
            }
          : item
      );
      message.success("Tăng số lượng thành công")
      return (state = {
        ...state,
        cart: inc,
        total: inc.reduce((accu: any, item: any) => accu + item.total_price, 0),
      });
    },
    decProductToCart: (state: any, action: any) => {
      const checkOne = state.cart.find(
        (item: any) => item.id === action.payload
      );

      if (checkOne.quantity <= 1) {
        const confirm = window.confirm("Bạn có muốn xóa ?");
        if (confirm) {
          const newCart = state.cart.filter(
            (item: any) => item.id !== action.payload
          );
          message.success("Xóa thành công !!");
          return (state = {
            ...state,
            cart: newCart,
            total: newCart.reduce(
              (accu: any, item: any) => accu + item.total_price,
              0
            ),
          });
        }
      } else {
        const newCart = state.cart.map((item: any) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
                total_price: (item.quantity - 1) * item.price,
              }
            : item
        );
        message.success("Giảm số lượng thành công !!");
        return (state = {
          ...state,
          cart: newCart,
          total: newCart.reduce(
            (accu: any, item: any) => accu + item.total_price,
            0
          ),
        });
      }
    },
    removeCartItem: (state:any, action:any) => {
      const confirm = window.confirm("Bạn có muốn xóa ?");
        if (confirm) {
          const newCart = state.cart.filter(
            (item: any) => item.id !== action.payload
          );
          message.success("Xóa thành công !!");
          return (state = {
            ...state,
            cart: newCart,
            total: newCart.reduce(
              (accu: any, item: any) => accu + item.total_price,
              0
            ),
          });
        }
    },
    clear: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
  extraReducers(builder) {},
});
export const { addProductToCart, incProductToCart, decProductToCart, removeCartItem , clear} =
  cartSlice.actions;

export const GetCart = (state: RootState) => state.cart
export default cartSlice.reducer;
