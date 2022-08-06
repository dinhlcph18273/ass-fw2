import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { AxiosError } from "axios";
import storage from "redux-persist/lib/storage";
import { signin, signup } from "../../api/user";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user: any) => {
    try {
      const { data }: any = await signup(user);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const login = createAsyncThunk("user/login", async (user: any) => {
  try {
    const { data, status }: any = await signin(user);
    if (status === 200) {
      message.success("Đăng nhập thành công!");
    }
    return data
  } catch (error) {
    const err = error as AxiosError;
    message.error(err.response?.data as string);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: "",
    user: {
      email: "",
      id: null,
      phone: null,
    },
  },
  reducers: {
    signOut(state) {
      storage.removeItem("user")
      message.success("Đăng xuất thành công");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: any, action: any) => {
      state.isSignin = false;
    });
    builder.addCase(login.fulfilled, (state: any, action:any) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
  },
});

export default userSlice.reducer;
export const { signOut } = userSlice.actions;
