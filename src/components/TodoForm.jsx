import React from "react";

function TodoForm({
  todo,
  setTodo,
  description,
  setDescription,
  addTodo,
  editId,
  cancelEdit,
}) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <input
        type="text"
        placeholder="Enter task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="bg-gray-700 text-white p-3 rounded-lg outline-none border border-gray-600 focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="bg-gray-700 text-white p-3 rounded-lg outline-none border border-gray-600 focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-3">
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white font-semibold p-3 rounded-lg flex-1 hover:bg-blue-700"
        >
          {editId ? "Update Task" : "Add Task"}
        </button>

        {editId && (
          <button
            onClick={cancelEdit}
            className="bg-gray-600 text-white px-4 rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoForm;