import React, { useState } from 'react';
import './';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import CompletedList from './components/CompletedList';

export interface ITodo {
  id: any;
  description: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  id: any;
  description: string;
  isDone: boolean;

  constructor(description: string = '', isDone: boolean = false) {
    this.id = uuid();
    this.description = description;
    this.isDone = isDone;
  }
}

function App() {

  const newTodos = [
    new Todo('')
  ];

  const [todos, setTodos] = useState(newTodos);

  function addTodo(todo: Todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div>
      <Header />
      <TodoInput addTodo={addTodo} />
      <div className="flex flex-col justify-center m-10 p-2 bg-gradient-to-r from-blue-400 rounded-md shadow-md md:flex-row">
        <TodoList todos={todos} setTodos={setTodos} />
        <CompletedList todos={todos} />
      </div>
    </div>
  );
}

export default App;
