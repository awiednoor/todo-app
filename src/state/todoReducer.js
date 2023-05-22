import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: 'Complete Todo',
      description: 'Try to complete a todo item using the checkbox',
      state: 'todo',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Add Todo',
      description: 'Try to add a todo item using the input field',
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
      description: 'Try to delete a todo item using the delete button',
      state: 'backlog',
      completed: false,
    },
  ],
  todoStates: ['Todo', 'In Progress', 'Done', 'Backlog'],
  isModalOpen: false,
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
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { addTodo, toggleTodoState, deleteTodo, toggleModal } =
  todoSlice.actions;
export default todoSlice.reducer;
