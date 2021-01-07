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
    addTodo(todo);
    setTodo(todoObj);
  }

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <input
        className="m-10 p-2 w-4/12 bg-gray-100 rounded-md focus:ring-2 focus:ring-blue-400"
        type="text"
        name="todo"
        value={todo.description}
        placeholder="Add new item"
        onChange={handleChange}
      />
      <button className="m-10 p-2 bg-red-100 rounded-md shadow-md transition duration-500 ease hover:bg-red-400 hover:cursor-pointer" type="submit">Add</button>
    </form>
  )
}
