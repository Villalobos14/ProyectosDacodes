// src/Routes/Router.jsx
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Calculadora from '../pages/todolist';
import TodoList from '../components/TodoListPage';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="todolist" element={<TodoList />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
