import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./lessons/Home";
import IntroProject from "./lessons/IntroProject";
import LessonStub from "./lessons/LessonStub";
import EconomistProject from "./lessons/EconomistProject";
import GapminderProject from "./lessons/GapminderProject";
import "./App.css";

export default function App() {
  const getViewFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "home" || /^project-[1-5]$/.test(hash)) return hash;
    return "home";
  };

  const [activeView, setActiveView] = useState(getViewFromHash);
  const [lang, setLang] = useState("es");

  useEffect(() => {
    function handleHashChange() {
      setActiveView(getViewFromHash());
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function handleSelect(view) {
    setActiveView(view);
    window.location.hash = view;
  }

  function toggleLang() {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }

  let content;
  if (activeView === "home") {
    content = <Home lang={lang} />;
  } else if (activeView === "project-1") {
    content = <IntroProject lang={lang} />;
  } else if (activeView === "project-2") {
    content = <EconomistProject lang={lang} />;
  } else if (activeView === "project-3") {
    content = <GapminderProject lang={lang} />;
  } else {
    content = <LessonStub />;
  }

  return (
    <div className="app">
      <Header
        activeView={activeView}
        onSelect={handleSelect}
        lang={lang}
        onToggleLang={toggleLang}
      />
      <main className="main">
        {content}
      </main>
    </div>
  );
}
