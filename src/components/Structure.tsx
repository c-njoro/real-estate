import { useEffect, useState } from "react";
import Footer from "./Footer";
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
    <div className="relative w-full ">
      <div>
        <Header toggleTheme={toggleTheme} isDark={isDark} />
      </div>
      <div className="w-full">{children}</div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Structure;
