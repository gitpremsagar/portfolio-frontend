import { createSlice } from '@reduxjs/toolkit';
import { userSchema } from '@/lib/schemas';
import {z} from "zod";

const initialState:z.TypeOf<typeof userSchema> = {
    firstName: "",
    lastName: "",
    userRoll: "",
    userId: "",
    jwtToken: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUser: (state, action) => {
        Object.assign(state, action.payload);
      },
      clearUser: (state) => {
        Object.assign(state, initialState);
      }
    },
  });

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;