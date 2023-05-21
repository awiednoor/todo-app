import { React } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="w-full min-h-96 flex flex-col justify-center items-center p-8 mt-16">
      <div className="w-1/3 flex flex-col justify-center items-center mt-8">
        <ul className="flex flex-col w-full ">
          {todos.map((todo) => (
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
