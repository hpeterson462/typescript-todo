import React from 'react';
import { Todo } from '../App';

interface TodoListProps {
  todos: Todo[]
};

export default function TodoList({ todos }: TodoListProps) {

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
