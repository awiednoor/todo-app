import { React } from 'react';
import AddTodo from './AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../state/todoReducer';

function TodoModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.todos.isModalOpen);

  return (
    <div className="w-full flex justify-center items-center">
      <button
        className="px-6 py-2 font-bold bg-indigo-500 hover:bg-indigo-600 text-white mx-2 rounded-full"
        onClick={() => dispatch(toggleModal())}
      >
        Add Todo
      </button>

      {isOpen ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-70">
          <div className="bg-neutral-800 border-2 rounded-xl border-neutral-600 w-1/3 h-1/3 flex justify-center items-center relative">
            <button
              className="text-md absolute top-4 right-4  bg-transperant text-neutral-400  mx-2"
              onClick={() => dispatch(toggleModal())}
            >
              x
            </button>
            <AddTodo />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TodoModal;
