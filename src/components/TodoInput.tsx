import React, { useState } from 'react';
import { Todo } from '../App';

interface TodoInputProps {
  addTodo: any
}

export default function TodoInput({ addTodo }: TodoInputProps) {

  const todoObj: Todo = new Todo();

  const [todo, setTodo] = useState(todoObj);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ ...todo, description: e.target.value })
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('todo: ', todo);
    setTodo(todoObj);
  }

  return (
    <form id="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={todo.description}
        placeholder="Add new item"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  )
}
