import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userSchema } from "@/lib/schemas";
import { z } from "zod";

// Define the type of your state
type UserState = z.TypeOf<typeof userSchema>;

const initialState: UserState = {
  firstName: "",
  lastName: "",
  userRoll: "",
  userId: "",
  jwtToken: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
    },
    clearUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
