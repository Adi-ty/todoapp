/**
 * @file TodoItem.jsx
 *
 * TodoItem component for rendering individual todo items.
 *
 * @package Todo_App
 */

import { Check, Pencil, Trash2, X } from "lucide-react";
import { memo, useState } from "react";

/**
 * Represents a single todo item in the list.
 * Allows viewing, editing, completing, and deleting a todo.
 *
 * @param {object} props - Component props.
 * @param {object} props.todo - The todo item data ({ id, text, completed }).
 * @param {Function} props.toggleComplete - Function to toggle the completion status.
 * @param {Function} props.deleteTodo - Function to delete the todo item.
 * @param {Function} props.editTodo - Function to save edited todo text.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered todo item.
 */
function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  /**
   * State to track if the item is currently being edited.
   * @type {[boolean, Function]}
   */
  const [isEditing, setIsEditing] = useState(false);
  /**
   * State to hold the text while editing.
   * @type {[string, Function]}
   */
  const [editText, setEditText] = useState(todo.text);

  /**
   * Enters editing mode and sets the initial edit text.
   */
  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  /**
   * Saves the edited todo text if it's valid and changed, then exits editing mode.
   */
  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText && todo.text !== trimmedText) {
      editTodo(todo.id, trimmedText);
    }
    setIsEditing(false);
  };

  /**
   * Cancels editing mode and resets the edit text.
   */
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  /**
   * Handles keydown events (Enter, Escape) in the edit input field.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event.
   */
  const handleKeyDown = (e) => {
    if ("Enter" === e.key) {
      handleSave();
    } else if ("Escape" === e.key) {
      handleCancel();
    }
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            className="edit-input"
            value={editText}
            maxLength={50}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button className="todo-button" onClick={handleSave} title="Save">
            <Check />
          </button>
          <button className="todo-button" onClick={handleCancel} title="Cancel">
            <X />
          </button>
        </div>
      ) : (
        <>
          <div
            className="custom-checkbox"
            onClick={() => toggleComplete(todo.id)}
            title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
            role="checkbox"
            aria-checked={todo.completed}
            tabIndex="0"
            onKeyDown={(e) => {
              if ("Enter" === e.key || " " === e.key) {
                toggleComplete(todo.id);
                e.preventDefault();
              }
            }}
          >
            {todo.completed && <div className="checkmark" />}
          </div>
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </span>
          <div className="todo-actions">
            <button className="todo-button" onClick={handleEdit} title="Edit">
              <Pencil />
            </button>
            <button
              className="todo-button delete"
              onClick={() => deleteTodo(todo.id)}
              title="Delete"
            >
              <Trash2 />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default memo(TodoItem, (prevProps, nextProps) => {
  return (
    prevProps.todo.id === nextProps.todo.id &&
    prevProps.todo.text === nextProps.todo.text &&
    prevProps.todo.completed === nextProps.todo.completed
  );
});
