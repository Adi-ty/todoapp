import { Moon, Sun } from "lucide-react";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-fixed"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeToggle;
