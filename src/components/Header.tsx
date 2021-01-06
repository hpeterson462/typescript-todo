import React from 'react';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'Todo List' }: HeaderProps) {

  return (
    <header>
      <h1>Todo List</h1>
    </header>
  )
}
