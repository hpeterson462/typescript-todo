import React from 'react';
import { Todo } from '../App';

interface TodoListProps {
  todos: Todo[],
  setTodos: any
};

export default function TodoList({ todos, setTodos }: TodoListProps) {

  const todosInProgress = todos.filter((todo) => {
    return !todo.isDone;
  })

  function updateCheckedItem(todo: Todo) {
    todo.isDone = !todo.isDone;
    todos[todo.id] = todo;

    setTodos([...todos])
  }

  return (
    <div className="w-3/12">
      <h2 className="m-10 text-3xl tracking-wide">Todo</h2>
      <ul>
        {todosInProgress.map((todo) => {
          return (
            <li className="m-10 text-xl  tracking-wide" key={todo.id}>
              <input
                className="m-2 focus:ring-2 focus:ring-red-400"
                type="checkbox"
                defaultChecked={todo.isDone}
                onChange={(e) => {
                  updateCheckedItem(todo)
                }}
              />
              {todo.description}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
