import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, toggleModal } from '../state/todoReducer';
import { v4 as uuidv4 } from 'uuid';

function AddTodo() {
  const handleAddTodo = () => {
    if (todoTitle.trim() === '') {
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      description: todoDescription,
      state: 'todo',
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTodoTitle('');
    setTodoDescription('');
    dispatch(toggleModal());
  };

  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  return (
    <div className="w-full flex flex-col items-evenly p-4">
      <h4 className="text-2xl font-bold ">New Task</h4>
      <input
        className="w-full p-2 h-12 bg-neutral-800 rounded-lg border border-neutral-600 my-2"
        type="text"
        placeholder="Todo title..."
        name="title"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />

      <textarea
        className="flex border w-full border-gray-300 bg-neutral-800 p-2 rounded-lg border-neutral-600 my-2"
        type="textArea"
        placeholder="Add a description..."
        rows={5}
        name="description"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
      <div className="grid justify-items-end w-full mt-4">
        <button
          className="px-6 py-2 bg-indigo-500 font-bold hover:bg-indigo-600 text-white mx-2 rounded-full disabled:hover:bg-indigo-500  disabled:opacity-75"
          onClick={handleAddTodo}
          disabled={todoTitle.trim() === ''}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
