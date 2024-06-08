import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/userSlice";
import technologiesReducer from "@/redux/technologiesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    technologies: technologiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
