import React from 'react';

export default function TodoList() {

  return (
    <div>
      <h2>Todo</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox"
                defaultChecked={todo.isDone}
              />
              Laundry
            </li>
          )
        })}
      </ul>
    </div>
  )
}
