# Todo App

A modern, responsive React Todo application with dark mode support and persistent storage.

<img width="1173" alt="Screenshot 2025-04-25 at 2 14 14 PM" src="https://github.com/user-attachments/assets/4a3a26fe-1587-4c6c-b715-7c14c1123751" />

## Features

- ✅ Create, edit and delete tasks with an intuitive interface
- ✅ Mark tasks as complete/incomplete with visual feedback
- 🌓 Dark/light theme toggle for comfortable viewing in any environment
- 💾 Persistent storage using localStorage to retain tasks between sessions
- 📱 Responsive design works on mobile, tablet, and desktop

## Technologies Used

- React 19 with Hooks for state management
- Vite for fast development and optimized builds
- Lucide React for beautiful, lightweight icons
- ESLint & Prettier for code quality and consistent formatting
- CSS Variables for theming support

## Usage

- **Add a task**: Type in the input field and press Enter or click "Add"
- **Mark as complete**: Click the checkbox next to a task
- **Edit a task**: Click the edit (pencil) icon, modify the text, and press Enter
- **Delete a task**: Click the delete (trash) icon
- **Toggle theme**: Click the sun/moon icon in the top right corner

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ThemeToggle.jsx  # Dark/light mode switch
│   ├── TodoForm.jsx     # Form for adding new tasks
│   ├── TodoItem.jsx     # Individual task component
│   └── TodoList.jsx     # Container for all tasks
├── App.css              # Main styling
├── App.jsx              # App component with main state
├── index.css            # Global CSS
└── main.jsx             # Entry point
```

## Screenshots

- Dark Mode

<img alt="Screenshot 2025-04-25 at 2 09 24 PM" src="https://github.com/user-attachments/assets/359288d2-3789-46a3-98e7-602892c3f5a6" />

- Light Mode
<img alt="Screenshot 2025-04-25 at 2 09 44 PM" src="https://github.com/user-attachments/assets/bafe69c5-f627-4b3b-8445-8b8cc452c002" />


