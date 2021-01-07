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
    <div className="w-3/12">
      <h2 className="m-10 text-3xl tracking-wide">Completed!</h2>
      <ul>
        {todosCompleted.map((todo) => {
          return (
            <li className="m-10 text-xl tracking-wide" key={todo.id}>
              <input
                className="m-2"
                type="checkbox"
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
