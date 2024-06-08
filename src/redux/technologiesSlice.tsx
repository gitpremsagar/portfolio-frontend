import { createSlice } from "@reduxjs/toolkit";
import { Technology } from "@/lib/types/technology.type";

const initialState: Technology[] = [];

const techonlogiesSlice = createSlice({
  name: "technologies",
  initialState,
  reducers: {
    setTechnologies(state, action) {
      return action.payload;
    },
    addTechnology(state, action) {
      state.push(action.payload);
    },
    removeTechnology(state, action) {
      return state.filter(
        (technology) => technology.technologyId !== action.payload
      );
    },
    updateTechnology(state, action) {
      const index = state.findIndex(
        (technology) => technology.technologyId === action.payload.technologyId
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {
  setTechnologies,
  addTechnology,
  removeTechnology,
  updateTechnology,
} = techonlogiesSlice.actions;

export default techonlogiesSlice.reducer;
