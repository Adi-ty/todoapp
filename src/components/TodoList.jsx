/**
 * @file TodoList.jsx
 *
 * Renders a list of todo items.
 *
 * @package Todo_App
 */

import { memo } from "react";
import TodoItem from "./TodoItem";

/**
 * Renders the list of todo items.
 *
 * @param {object} props - Component props.
 * @param {Array<object>} props.todos - The array of todo items.
 * @param {Function} props.toggleComplete - Function to toggle todo completion status.
 * @param {Function} props.deleteTodo - Function to delete a todo.
 * @param {Function} props.editTodo - Function to edit a todo.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered list of todos.
 */
function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default memo(TodoList);
