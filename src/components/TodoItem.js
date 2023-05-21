import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../state/todoReducer';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const handleDelete = (task) => {
    alert(`Are you sure you want to delete :\n ${task.title}`);
    dispatch(deleteTodo(task.id));
  };
  return (
    <div className="w-full flex-col">
      <div className="w-full flex items-start justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 border border-gray-300 mr-4 "
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <h5
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            className="text-lg font-semibold "
          >
            {todo.title}
          </h5>
        </div>

        <button
          className=" w-20 h-10 bg-neutral-600 rounded-full font-bold hover:bg-rose-700 "
          onClick={() => handleDelete(todo)}
        >
          Delete
        </button>
      </div>
      <p className="my-4 px-10">{todo.description}</p>
    </div>
  );
}

export default TodoItem;
