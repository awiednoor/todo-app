import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: 'Complete Todo',
      description: 'Try to complete a todo item using the checkbox',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Add Todo',
      description: 'Try to add a todo item using the input field',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Delete Todo',
      description: 'Try to delete a todo item using the delete button',
      completed: false,
    },
  ],
};
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    toggleTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const removedTodo = state.todos.splice(index, 1)[0];
      removedTodo.completed = !removedTodo.completed;
      state.todos.push(removedTodo);
      state.todos.sort((a, b) => a.completed - b.completed);
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
