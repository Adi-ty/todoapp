/**
 * @file App.jsx
 *
 * Main application component for the Todo App.
 *
 * @package Todo_App
 */

import { useState, useEffect, useCallback } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

/**
 * Main application component that manages todos and theme state.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  /**
   * State for the list of todo items.
   * Initializes from localStorage or an empty array.
   *
   * @type {[Array<object>, Function]}
   */
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  /**
   * State for the dark mode theme.
   * Initializes from localStorage or defaults to false.
   *
   * @type {[boolean, Function]}
   */
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  /**
   * Adds a new todo item to the list.
   *
   * @param {string} text - The text content of the new todo.
   */
  const addTodo = useCallback((text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  }, []);

  /**
   * Deletes a todo item by its ID.
   *
   * @param {number} id - The ID of the todo to delete.
   */
  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  /**
   * Toggles the completion status of a todo item by its ID.
   *
   * @param {number} id - The ID of the todo to toggle.
   */
  const toggleComplete = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  /**
   * Edits the text of a todo item by its ID.
   *
   * @param {number} id - The ID of the todo to edit.
   * @param {string} newText - The new text content for the todo.
   */
  const editTodo = useCallback((id, newText) => {
    if (newText.trim()) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, text: newText.trim() } : todo,
        ),
      );
    }
  }, []);

  /**
   * Toggles the dark mode theme.
   */
  const toggleTheme = useCallback(() => {
    setDarkMode((prevMode) => !prevMode);
  }, []);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="todo-app">
        <div className="app-header">
          <h1>ToDo App</h1>
        </div>
        {0 === todos.length ? (
          <p className="empty-message">No tasks yet. Add one below!</p>
        ) : (
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
