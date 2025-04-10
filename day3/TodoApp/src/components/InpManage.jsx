import React, { useReducer, useState } from "react";

// Action types
const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

// Reducer function
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

// Helper function to create new todos
function newTodo(name) {
  return {
    id: Date.now(),
    text: name,
    completed: false,
  };
}

// Single Todo item component
function Todo({ todo, dispatch }) {
  return (
    <div className="flex items-center gap-4 my-2">
      <span
        className={`text-lg ${
          todo.completed ? "line-through text-gray-400" : "text-black"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
        className="px-2 py-1 bg-yellow-300 rounded hover:bg-yellow-400"
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
        className="px-2 py-1 bg-red-300 rounded hover:bg-red-400"
      >
        Delete
      </button>
    </div>
  );
}

// Main App component
function InpManag() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App 📝</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter todo"
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <div>
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">No todos yet!</p>
        ) : (
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          ))
        )}
      </div>
    </div>
  );
}

export default InpManag;
