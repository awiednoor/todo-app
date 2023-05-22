import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoState, deleteTodo } from '../state/todoReducer';

function TodoItem({ todo }) {
  const [alertMessage, setAlertMessage] = useState({
    show: false,
    title: '',
  });
  const todoStates = useSelector((state) => state.todos.todoStates);
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
  const handleTodoChange = (e) => {
    const selectedState = e.target.value.replace(/\s/g, '').toLowerCase();
    dispatch(toggleTodoState({ id: todo.id, state: selectedState }));
  };

  return (
    <div className="w-full flex-col">
      <div className="w-full flex items-start justify-between">
        <div className="flex items-center">
          <select
            className="w-8 h-8 mr-4 bg-neutral-600 rounded-full font-bold hover:bg-green-700"
            name="todoStates"
            onChange={handleTodoChange}
          >
            <option disabled selected value>
              change todo state
            </option>
            {todoStates.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>

          <h5
            style={
              todo.state === 'todo'
                ? { color: '#34d399' }
                : todo.state === 'inprogress'
                ? { color: '#F59E0B' }
                : todo.state === 'done'
                ? { textDecoration: 'line-through' }
                : todo.state === 'backlog'
                ? { opacity: '70%' }
                : { color: '#10B981' }
            }
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
