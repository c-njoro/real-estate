import { useEffect, useState } from "react";
import Header from "./Header";

const Structure = ({ children }: any) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };
  return (
    <div className="">
      <div>
        <Header toggleTheme={toggleTheme} isDark={isDark} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Structure;
