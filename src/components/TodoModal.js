import { React, useState } from 'react';
import AddTodo from './AddTodo';
import { Button } from 'flowbite-react';

function TodoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col w-full">
        <div>
          <Button
            gradientDuoTone="purpleToBlue"
            onClick={() => setIsOpen(true)}
          >
            Add New Todo
          </Button>
        </div>
        <AddTodo isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default TodoModal;
