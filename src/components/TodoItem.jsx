import React from "react";

function TodoItem({ todo, deleteTodo, startEdit }) {
  return (
    <div className="group bg-gray-700 border border-gray-600 p-4 rounded-lg flex items-center justify-between hover:bg-gray-600 transition">
      
      <div>
        <h2 className="font-semibold text-white">
          {todo.text}
        </h2>
        <p className="text-sm text-gray-300">
          {todo.description}
        </p>
      </div>

      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
        <button
          onClick={() => startEdit(todo)}
          className="text-blue-400 hover:text-blue-300"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;