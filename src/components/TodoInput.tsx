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
        className="m-10 p-2 w-4/12 bg-gray-100 rounded-md text-gray-600 focus:ring-2 focus:ring-red-300"
        type="text"
        name="todo"
        value={todo.description}
        placeholder="Add new item"
        onChange={handleChange}
      />
      <button className="m-10 p-2 bg-red-300 rounded-md shadow-md transition duration-500 ease-in-out hover:bg-yellow-500 text-white hover:text-black hover:cursor-pointer" type="submit">Add</button>
    </form>
  )
}
