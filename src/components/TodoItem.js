import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../state/todoReducer';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex-col">
      <div className="w-full flex items-start justify-between">
        <div className="flex items-start">
          <input
            type="checkbox"
            className="w-6 h-6 border border-gray-300 mr-4"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <h3
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            className="text-xl font-semibold text-gray-800  w-fit-content "
          >
            {todo.title}
          </h3>
        </div>

        <button
          className="px-4 py-2 bg-blue-600 text-white mx-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
      <p className="my-4 px-10">{todo.description}</p>
    </div>
  );
}

export default TodoItem;
