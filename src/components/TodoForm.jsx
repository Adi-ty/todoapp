/**
 * @file TodoForm.jsx
 *
 * Form component for adding new todo items.
 *
 * @package Todo_App
 */

import { memo, useState } from "react";

/**
 * Form component for adding new todo items.
 *
 * @param {object} props - Component props.
 * @param {Function} props.addTodo - Function to add a new todo item.
 *
 * @returns {JSX.Element} The rendered form.
 */
function TodoForm({ addTodo }) {
  /**
   * State for the input field value.
   * @type {[string, Function]}
   */
  const [input, setInput] = useState("");

  /**
   * Handles form submission.
   * Prevents default form submission, calls addTodo if input is not empty,
   * and clears the input field.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add new tasks in your list"
        value={input}
        maxLength={50}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}

export default memo(TodoForm);
