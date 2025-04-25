/**
 * @file ThemeToggle.jsx
 *
 * ThemeToggle component for toggling between light and dark themes.
 *
 * @package Todo_App
 */

import { Moon, Sun } from "lucide-react";
import { memo } from "react";

/**
 * Button component to toggle between light and dark themes.
 *
 * @param {object} props - Component props.
 * @param {boolean} props.darkMode - Current theme state (true for dark, false for light).
 * @param {Function} props.toggleTheme - Function to toggle the theme state.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered theme toggle button.
 */
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
