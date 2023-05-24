import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: 'Complete Todo',
      description: 'Try to complete a todo item using the dropdown',
      state: 'todo',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Add Todo',
      description: 'Try to add a todo item using the add todo button',
      state: 'inprogress',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Delete Todo',
      description: 'Try to delete a todo item using the delete button',
      state: 'done',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Change Todo State',
      description: 'Try to change a todo item state using the dropdown',
      state: 'backlog',
      completed: false,
    },
  ],
  todoStates: ['Todo', 'In Progress', 'Done', 'Backlog'],
};
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    toggleTodoState: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].state = action.payload.state;
      if (action.payload.state === 'done') {
        state.todos[index].completed = true;
      } else {
        state.todos[index].completed = false;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, toggleTodoState, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
