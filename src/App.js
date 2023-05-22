import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';
import { useSelector } from 'react-redux';

function App() {
  const todoStates = useSelector((state) => state.todos.todoStates);
  return (
    <div className="w-full min-h-screen max-h-content bg-neutral-800 text-white pt-32">
      <TodoModal />
      {todoStates.map((state) => (
        <TodoList type={state} />
      ))}
    </div>
  );
}

export default App;
