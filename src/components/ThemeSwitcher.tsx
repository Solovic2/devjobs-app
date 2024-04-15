import { useContext, useEffect, useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { ThemeContext } from "./Theme";

const switcherStyle =
  "absolute left-1 top-1 dark:bg-neutral-300 bg-neutral-800 w-4 h-4 rounded-full transition";

const ThemeSwitcher = () => {
  const initialTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(initialTheme);
  const body: HTMLBodyElement | null = document.querySelector("body")

  useEffect(() => {
    if (theme === "dark") {
      body?.classList.add("dark");
    } else {
      body?.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", JSON.stringify("light"));
      setTheme("light");
    } else {
      localStorage.setItem("theme", JSON.stringify("dark"));
      setTheme("dark");
    }
  };

  return (
    <button
      className="relative flex cursor-pointer"
      onClick={handleThemeSwitch}
    >
      <div className="border-[1px] dark:border-neutral-300 border-neutral-800 w-10 h-6 rounded-full" />
      <div
        className={
          theme === "dark" ? switcherStyle : `${switcherStyle} translate-x-[100%]`
        }
      >
        {theme === "dark" ? (
          <IoMoonSharp className="bg-neutral-800" />
        ) : (
          <IoSunny className="bg-neutral-100" />
        )}
      </div>
    </button>
  );
};
export default ThemeSwitcher;
