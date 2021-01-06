import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import CompletedList from './components/CompletedList';

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
