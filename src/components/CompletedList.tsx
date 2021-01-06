import React from 'react';
import { Todo } from '../App';

interface CompletedListProps {
  todos: Todo[]
};

export default function CompletedList({ todos }: CompletedListProps) {

  const todosCompleted = todos.filter((todo) => {
    return todo.isDone;
  })

  return (
    <div>
      <h2>Completed!</h2>
      <ul>
        {todosCompleted.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox"
                defaultChecked={todo.isDone}
                disabled
              />
              {todo.description}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
