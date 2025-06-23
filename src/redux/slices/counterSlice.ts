import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useReducer } from "react";

// Define the TS type for the counter slice's state
export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

// Define the initial value for the slice state
const initialState: CounterState = {
  value: 0,
  status: "idle",
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the generated action creators for use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the slice reducer for use in the store configuration
export default counterSlice.reducer;
