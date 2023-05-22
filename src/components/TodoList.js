import { React, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function TodoList({ type }) {
  const [list, setList] = useState([]);
  const todos = useSelector((state) => state.todos.todos);
  // Set the list based on the passed type prop and when it matches the object state
  useEffect(() => {
    const filteredList = todos.filter(
      (todo) => todo.state === type.replace(/\s/g, '').toLowerCase()
    );
    setList(filteredList);
  }, [todos, type]);
  return (
    <div className="w-1/2 mx-auto my-8 min-h-96 flex flex-col justify-center items-center p-8 border-t-2 border-neutral-700">
      <h1 className="text-2xl font-bold mb-4 ">{type}</h1>
      <div className="w-11/12 flex flex-col justify-center items-center mt-8">
        <ul className="flex flex-col w-full ">
          {list.map((todo) => (
            <li key={todo.id} className="my-4 border-b-2 border-neutral-400">
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
