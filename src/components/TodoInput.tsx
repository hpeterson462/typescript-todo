import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function TodoInput() {

  const todoObj = {
    id: uuid(),
    description: '',
    idDone: false
  }

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
