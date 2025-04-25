import { Check, Pencil, Trash2, X } from "lucide-react";
import { memo, useState } from "react";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText && trimmedText !== todo.text) {
      editTodo(todo.id, trimmedText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
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
              if (e.key === "Enter" || e.key === " ") {
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
