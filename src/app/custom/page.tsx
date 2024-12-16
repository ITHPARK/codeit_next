"use client";

import { useEffect, useState } from "react";

const Dark: React.FC = () => {
  const [dark, setDark] = useState<string>("");
  const toggleDarkMode = () => {
    const darkModel = localStorage.getItem("darkMode");
    if (darkModel === "enabled") {
      localStorage.setItem("darkMode", "disabled");
      document.documentElement.classList.remove("dark");
      setDark("disabled");
    } else {
      localStorage.setItem("darkMode", "enabled");
      setDark("enabled");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      document.documentElement.classList.add("dark");
      setDark("enabled");
    } else {
      setDark("disabled");
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-neutral-200 flex flex-col gap-10 justify-center items-center dark:bg-neutral-700">
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-400 dark:text-neutral-50"
      >
        {"다크모드 토글버튼"}
      </button>
      <p className="text-red-400 text-3xl font-bold">{dark}</p>
      <div className=" container mx-auto p-4 bg-white dark:bg-neutral-400 dark:text-neutral-50 rounded-lg flex flex-col justify-center items-center gap-10">
        <p>{"다크모드 텍스트"}</p>
        <div className="dark:bg-blue-400 w-40 h-20 bg-red-400 rounded-lg "></div>
      </div>
    </div>
  );
};

export default Dark;
