import React from 'react';
import { v4 as uuid } from 'uuid';

export default function CompletedList() {

  const todos = [
    {
      id: uuid(),
      description: 'Laundry',
      isDone: true
    },
    {
      id: uuid(),
      description: 'Wash dishes',
      isDone: true
    }
  ];

  return (
    <div>
      <h2>Completed!</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox"
                defaultChecked={todo.isDone}
                disabled
              />
            Laundry
            </li>
          )
        })}
      </ul>
    </div>
  )
}
