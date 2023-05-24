import { React, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { Accordion } from 'flowbite-react';
function TodoList({ type }) {
  const [list, setList] = useState([]);
  const todos = useSelector((state) => state.todos.todos);
  // Set the list based on the passed type prop and when it matches the object state
  useEffect(() => {
    const filteredList = todos.filter(
      (todo) => todo.state === type.replace(/\s/g, '').toLowerCase()
    );
    setList(filteredList);
  }, [todos, type]);
  return (
    <div className="w-full">
      <Accordion>
        <Accordion.Panel>
          <div>
            <Accordion.Title>{type}</Accordion.Title>
          </div>

          {list.map((todo) => (
            <Accordion.Content key={todo.id}>
              <TodoItem todo={todo} />
            </Accordion.Content>
          ))}
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default TodoList;
