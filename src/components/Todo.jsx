import React from 'react';

function Todo({ task, onDelete }) {
  return (
    <li className="flex justify-between items-center p-3 mb-2 border-b border-gray-700">
      <span>{task.name}</span>
      <button 
        onClick={() => onDelete(task.id)} 
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
      >
        Eliminar
      </button>
    </li>
  );
}

export default Todo;
