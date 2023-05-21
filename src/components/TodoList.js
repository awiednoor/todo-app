import { React, useState } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../state/todoReducer';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const handleAddTodo = () => {
    if (todoTitle.trim() === '') {
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      description: todoDescription,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTodoTitle('');
    setTodoDescription('');
  };

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  return (
    <div className="w-full flex flex-col justify-center items-center p-8 mt-16">
      <div className="w-1/3 flex justify-center ">
        <div className="flex flex-col">
          <div>
            {' '}
            <label htmlFor="todo">Title</label>
            <br />
            <input
              className="border border-gray-300 w-72 p-2 "
              type="text"
              name="title"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-gray-600 text-white disabled:opacity-75"
              onClick={handleAddTodo}
              disabled={todoTitle.trim() === ''}
            >
              Add Todo
            </button>
          </div>
          <label htmlFor="todo">Description</label>
          <input
            className="border w-full border-gray-300 w-72 p-2 "
            type="text"
            name="description"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center mt-8">
        <ul className="flex flex-col w-full">
          {todos.map((todo) => (
            <li key={todo.id} className="my-4 bg-blue-200">
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
