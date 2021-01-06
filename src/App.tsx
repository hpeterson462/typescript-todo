import React, { useState } from 'react';
import './App.css';
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
      <TodoList todos={todos} />
      <CompletedList todos={todos} />
    </div>
  );
}

export default App;
