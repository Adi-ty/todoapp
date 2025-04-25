import { useState, useEffect, useCallback } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
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

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const toggleComplete = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const editTodo = useCallback((id, newText) => {
    if (newText.trim()) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, text: newText.trim() } : todo,
        ),
      );
    }
  }, []);

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
        {todos.length === 0 ? (
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
