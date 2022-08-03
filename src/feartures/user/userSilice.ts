import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../api/user";
import { authenticated, isAuthenticate, removeLs } from "../../utils/localStorage";


export const createUser = createAsyncThunk(
    "user/createUser",
    async (user: any) => {
        try {
            const { data  }: any = await signup(user)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const login = createAsyncThunk(
    "user/login",
    async (user: any) => {
        try {
            const { data ,status}: any = await signin(user)
            if(status === 200){
                authenticated("user", data )
                message.success("Đăng nhập thành công!")
            }
        } catch (error) {
            const err = error as AxiosError
            message.error(err.response?.data as string)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: [],
        auth: {},
        isSignin: false
    },
    reducers: {
        signOut(state) {
            removeLs("user");
            state.isSignin = false;
            message.success("Đăng xuất thành công")
          },
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(login.pending, (state:any, action:any)=> {
            state.isSignin = false
        })
        builder.addCase(login.fulfilled, (state:any, action)=> {
            state.value = action.payload
            state.isSignin = true
        })
    }
})

export default userSlice.reducer
export const { signOut } = userSlice.actions;
