import { useState, useEffect } from "react";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editText);
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
            ✅
          </button>
          <button className="todo-button" onClick={handleCancel} title="Cancel">
            ❌
          </button>
        </div>
      ) : (
        <>
          <div
            className="custom-checkbox"
            onClick={() => toggleComplete(todo.id)}
            title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {todo.completed && <div className="checkmark"></div>}
          </div>
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </span>
          <div className="todo-actions">
            <button className="todo-button" onClick={handleEdit} title="Edit">
              ✏️
            </button>
            <button
              className="todo-button delete"
              onClick={() => deleteTodo(todo.id)}
              title="Delete"
            >
              🗑️
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
