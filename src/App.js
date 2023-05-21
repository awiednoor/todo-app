import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';

function App() {
  return (
    <div className="w-full min-h-screen max-h-content bg-neutral-800 text-white pt-32">
      <TodoModal />
      <TodoList />
    </div>
  );
}

export default App;
