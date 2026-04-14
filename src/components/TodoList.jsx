import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, startEdit }) {
  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-center text-gray-400">No tasks yet</p>
      ) : (
        todos.map((t) => (
          <TodoItem
            key={t.id}
            todo={t}
            deleteTodo={deleteTodo}
            startEdit={startEdit}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;