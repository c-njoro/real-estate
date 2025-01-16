import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface StructureProps {
  children: React.ReactNode;
}

const Structure: React.FC<StructureProps> = ({ children }) => {
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
      <div className="">
        <Header toggleTheme={toggleTheme} isDark={isDark} />
      </div>
      <div className="w-full pt-[calc(10vh)]">{children}</div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Structure;
