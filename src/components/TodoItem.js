import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../state/todoReducer';

function TodoItem({ todo }) {
  const [alertMessage, setAlertMessage] = useState({
    show: false,
    title: '',
  });
  const dispatch = useDispatch();
  const handleOk = (task) => {
    setAlertMessage({
      show: true,
      title: task.title,
    });
    dispatch(deleteTodo(task.id));
    setAlertMessage({
      show: false,
      title: '',
    });
  };
  const handleCancel = () => {
    setAlertMessage({
      show: false,
      title: '',
    });
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
          onClick={() =>
            setAlertMessage({
              show: true,
              title: todo.title,
            })
          }
        >
          Delete
        </button>
      </div>
      <p className="my-4 px-10">{todo.description}</p>
      {alertMessage.show && (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="flex flex-col bg-neutral-800 border-2 rounded-xl border-neutral-600 w-1/3 h-1/3 flex justify-center items-center relative">
            <p>Are you sure you want to delete:</p>
            <p>{alertMessage.title}</p>
            <div className="w-1/3 flex justify-between items-center mt-8 ">
              <button
                className=" w-20 h-10 bg-rose-600 rounded-full font-bold hover:bg-rose-700 "
                onClick={() => handleOk(todo)}
              >
                Yes
              </button>
              <button
                className=" w-20 h-10 bg-neutral-500 hover:bg-neutral-600 rounded-full font-bold  "
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
