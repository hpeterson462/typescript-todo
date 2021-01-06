import React from 'react';
import { Todo } from '../App';

interface CompletedListProps {
  todos: Todo[]
};

export default function CompletedList({ todos }: CompletedListProps) {

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
