import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import CompletedList from './components/CompletedList';

export interface ITodo {
  id: string;
  description: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  id: string;
  description: string;
  isDone: boolean;

  constructor(description: string = '', isDone: boolean = false) {
    this.id = uuid();
    this.description = description;
    this.isDone = isDone;
  }
}

function App() {
  return (
    <div>
      <Header />
      <TodoInput />
      <TodoList />
      <CompletedList />
    </div>
  );
}

export default App;
