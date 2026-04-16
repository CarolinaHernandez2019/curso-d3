// Sidebar con la lista de módulos del curso. Inspirado en el índice de lecciones
// de Yann Holtz: número circular del módulo, título, chevron para expandir/colapsar,
// y lecciones internas con línea gruesa como bullet.

import { useState } from "react";
import { courseModules } from "../data/courseStructure";

export default function Sidebar({ activeLessonId, onSelectLesson }) {
  // Qué módulo está expandido. Por defecto el módulo 1 (el único con contenido hoy).
  const [expandedModule, setExpandedModule] = useState(1);

  function toggleModule(id) {
    setExpandedModule((prev) => (prev === id ? null : id));
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-highlight">Main Course</span>
        <p className="sidebar-subtitle">
          11 modules, each packed with well-paced, interactive lessons to master D3.js and React
        </p>
      </div>

      <nav>
        {courseModules.map((mod) => {
          const isExpanded = expandedModule === mod.id;
          const isPlaceholder = mod.placeholder === true;

          return (
            <div
              key={mod.id}
              className={`module ${isPlaceholder ? "module-placeholder" : ""}`}
            >
              <button
                className="module-head"
                onClick={() => toggleModule(mod.id)}
                disabled={isPlaceholder}
              >
                <span className="module-number">{mod.id}</span>
                <span className="module-title">{mod.title}</span>
                {!isPlaceholder && (
                  <span className={`module-chevron ${isExpanded ? "open" : ""}`}>
                    ⌃
                  </span>
                )}
              </button>

              {isExpanded && !isPlaceholder && (
                <div className="module-body">
                  {mod.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className={`lesson ${
                        activeLessonId === lesson.id ? "lesson-active" : ""
                      }`}
                      onClick={() => onSelectLesson(lesson.id)}
                    >
                      <span className="lesson-bullet" />
                      <span className="lesson-title">{lesson.title}</span>
                    </button>
                  ))}
                  {mod.project && (
                    <button
                      className={`project-btn ${
                        activeLessonId === mod.project.id ? "project-btn-active" : ""
                      }`}
                      onClick={() => onSelectLesson(mod.project.id)}
                    >
                      Project
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
