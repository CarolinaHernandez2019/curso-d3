import { useState } from "react";
import Header from "./components/Header";
import Home from "./lessons/Home";
import IntroProject from "./lessons/IntroProject";
import LessonStub from "./lessons/LessonStub";
import "./App.css";

export default function App() {
  const [activeView, setActiveView] = useState("home");
  const [lang, setLang] = useState("es");

  function toggleLang() {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }

  let content;
  if (activeView === "home") {
    content = <Home lang={lang} />;
  } else if (activeView === "project-1") {
    content = <IntroProject lang={lang} />;
  } else {
    content = <LessonStub />;
  }

  return (
    <div className="app">
      <Header
        activeView={activeView}
        onSelect={setActiveView}
        lang={lang}
        onToggleLang={toggleLang}
      />
      <main className="main">
        {content}
      </main>
    </div>
  );
}
