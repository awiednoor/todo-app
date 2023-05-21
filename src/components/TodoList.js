import { React, useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const todos = [
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
  ];
  const [items, setItems] = useState(todos);
  const [newItem, setNewItem] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleSubmit = () => {
    if (newItem.trim() === '') {
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: newItem,
      description: newDescription,
      completed: false,
    };
    setNewItem('');
    setNewDescription('');
    setItems((prevItems) => [newTodo, ...prevItems]);
  };

  useEffect(() => {
    console.log(items); // Log the updated items whenever it changes
  }, [items]);

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
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-gray-600 text-white disabled:opacity-75"
              onClick={handleSubmit}
              disabled={newItem.trim() === ''}
            >
              Add Todo
            </button>
          </div>
          <label htmlFor="todo">Description</label>
          <input
            className="border w-full border-gray-300 w-72 p-2 "
            type="text"
            name="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center mt-8">
        <ul className="flex flex-col w-full">
          {items.map((todo) => (
            <li key={todo.id} className="my-4 bg-blue-200">
              <TodoItem todo={todo} setItems={setItems} items={items} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
