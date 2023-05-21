import React from 'react';

function TodoItem({ todo, setItems, items }) {
  const handleChecked = () => {
    const newItems = [...items];
    const index = newItems.findIndex((item) => item.id === todo.id);
    const removedItem = newItems.splice(index, 1)[0];
    removedItem.completed = !removedItem.completed;
    newItems.push(removedItem);
    newItems.sort((a, b) => a.completed - b.completed);
    setItems(newItems);
  };

  const handleDelete = () => {
    const newItems = [...items];
    const index = newItems.findIndex((item) => item.id === todo.id);
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <div className="w-full flex-col">
      <div className="w-full flex items-start justify-between">
        <div className="flex items-start">
          <input
            type="checkbox"
            className="w-6 h-6 border border-gray-300 mr-4"
            checked={todo.completed}
            onChange={handleChecked}
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
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <p className="my-4 px-10">{todo.description}</p>
    </div>
  );
}

export default TodoItem;
