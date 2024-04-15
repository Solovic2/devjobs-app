import { useContext, useEffect, useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { ThemeContext } from "./Theme";

const switcherStyle =
  "absolute left-1 top-1 bg-white  w-4 h-4 rounded-full transition";

const ThemeSwitcher = () => {
  const initialTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(initialTheme);
  const body: HTMLBodyElement | null = document.querySelector("body");

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
    <div className="flex items-center gap-3">
      <IoMoonSharp  />
      <button
        className="relative cursor-pointer"
        onClick={handleThemeSwitch}
      >
        <div className="border-[1px] w-10 h-6 rounded-full" />
        <div
          className={
            theme === "dark"
              ? switcherStyle
              : `${switcherStyle} translate-x-[100%]`
          }
        ></div>
      </button>
      <IoSunny />
    </div>
  );
};
export default ThemeSwitcher;
