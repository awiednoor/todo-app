import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoState, deleteTodo } from '../state/todoReducer';
import { Button, Modal } from 'flowbite-react';

function TodoItem({ todo }) {
  const [isOpen, setIsOpen] = useState(false);
  const todoStates = useSelector((state) => state.todos.todoStates);
  const dispatch = useDispatch();
  const handleOk = (task) => {
    dispatch(deleteTodo(task.id));
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleTodoChange = (e) => {
    const selectedState = e.target.value.replace(/\s/g, '').toLowerCase();
    dispatch(toggleTodoState({ id: todo.id, state: selectedState }));
  };

  return (
    <div className="w-full flex-col">
      <div className="w-full flex items-start justify-between">
        <div className="flex ">
          <select
            className="w-2 h-6 mr-4 bg-white-600 rounded-full font-bold hover:bg-blue-700"
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
          <div className="w-full felx flex-col justify-between items-center">
            <p
              className={`text-md font-semibold`.concat(
                todo.state === 'todo'
                  ? ' text-blue-600'
                  : todo.state === 'inprogress'
                  ? ' text-orange-400'
                  : todo.state === 'done'
                  ? ' text-gray-700 line-through'
                  : todo.state === 'backlog'
                  ? ' text-gray-500 opacity-70'
                  : ' text-green-500'
              )}
            >
              {todo.title}
            </p>
            <p className="my-3">{todo.description}</p>
          </div>
        </div>
        <Button color="gray" onClick={() => setIsOpen(true)}>
          Delete
        </Button>
      </div>

      <Modal show={isOpen} onClose={handleCancel}>
        <Modal.Header>
          <h2 className="text-2xl font-bold ">Delete Todo</h2>
        </Modal.Header>
        <Modal.Body>
          <div className=" flex flex-col justify-center items-center text-center mx-auto">
            <p>Are you sure you want to delete:</p>
            <p>{todo.title}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex w-1/3 justify-between mx-auto">
            <Button color="failure" onClick={() => handleOk(todo)}>
              Yes
            </Button>
            <Button color="gray" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TodoItem;
