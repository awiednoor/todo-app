import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../state/todoReducer';
import { v4 as uuidv4 } from 'uuid';
import { Modal, Button, Label, TextInput, Textarea } from 'flowbite-react';
function AddTodo({ isOpen, setIsOpen }) {
  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoData = new FormData(e.target);
    const todoTitle = todoData.get('task');
    const todoDescription = todoData.get('description');
    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      description: todoDescription,
      state: 'todo',
      completed: false,
    };
    dispatch(addTodo(newTodo));
    e.target.reset();
    setIsOpen(false);
  };

  const handleClose = () => {
    const form = document.getElementById('addTodoForm');
    form.reset();
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col items-evenly p-4">
      <Modal show={isOpen} onClose={handleClose}>
        <Modal.Header>Add new task</Modal.Header>
        <form onSubmit={handleAddTodo} id="addTodoForm">
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="task" value="Todo" />
                </div>
                <TextInput
                  id="task"
                  name="task"
                  type="text"
                  placeholder="Add new todo"
                  required={true}
                />
              </div>
              <div id="textarea">
                <div className="mb-2 block">
                  <Label htmlFor="Description" value="Description" />
                </div>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Add description..."
                  rows={4}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button gradientDuoTone="purpleToBlue" type="submit">
              Add Todo
            </Button>
            <Button color="gray" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default AddTodo;
