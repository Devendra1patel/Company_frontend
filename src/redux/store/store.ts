import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../features/exapleSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer , 
  },
});

// Infer types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
