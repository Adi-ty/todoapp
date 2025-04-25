import { Moon, Sun } from "lucide-react";
import { memo } from "react";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-fixed"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun color="yellow" /> : <Moon color="blue" />}
    </button>
  );
}

export default memo(ThemeToggle);
