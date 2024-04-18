import { ReactNode, createContext } from "react";

export const ThemeContext = createContext("");

const Theme = ({ children }: { children: ReactNode }) => {
  const initialValue = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? "dark"
      : "light";

  const theme: string | null = localStorage.getItem("theme");
  const defaultTheme = theme ? JSON.parse(theme) : initialValue();

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
