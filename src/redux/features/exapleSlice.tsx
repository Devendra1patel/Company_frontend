// src/redux/features/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ExampleState {
  value: number;
}

// Define the initial state using that type
const initialState: ExampleState = {
  value: 0,
};

// Create the slice
const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the action creators
export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

// Export the reducer to be used in the store
export default exampleSlice.reducer;
