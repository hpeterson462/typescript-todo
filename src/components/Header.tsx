import React from 'react';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'Packing List' }: HeaderProps) {

  return (
    <header>
      <h1 className="flex justify-center text-5xl m-10 p-2 tracking-wide bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-md shadow-md">
        Packing List
        </h1>
    </header>
  )
}
