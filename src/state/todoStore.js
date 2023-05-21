import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';

export const todoStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
