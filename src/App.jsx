import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!todo.trim()) return;

    if (editId) {
      setTodos(
        todos.map((t) =>
          t.id === editId ? { ...t, text: todo, description } : t
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: todo,
        description,
      };
      setTodos([newTodo, ...todos]);
    }

    setTodo("");
    setDescription("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setTodo(todo.text);
    setDescription(todo.description);
  };

  const cancelEdit = () => {
    setEditId(null);
    setTodo("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Todo App
        </h1>

        <TodoForm
          todo={todo}
          setTodo={setTodo}
          description={description}
          setDescription={setDescription}
          addTodo={addTodo}
          editId={editId}
          cancelEdit={cancelEdit}
        />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          startEdit={startEdit}
        />
      </div>
    </div>
  );
}

export default App;