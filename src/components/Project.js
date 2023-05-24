import { React } from 'react';
import TodoModal from './TodoModal';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';

function Project() {
  const todoStates = useSelector((state) => state.todos.todoStates);
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold mb-4 ">Project_1</h1>
      <TodoModal />
      {todoStates.map((state) => (
        <TodoList type={state} />
      ))}
    </div>
  );
}

export default Project;
