export const translations = {
  // Header
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.project": { es: "Proyecto", en: "Project" },

  // Home
  "home.title": {
    es: "D3 ❤ React - Proyectos del curso",
    en: "D3 ❤ React - Course Projects",
  },
  "home.subtitle.before": { es: "", en: "" },
  "home.subtitle.after": {
    es: " · primer cohorte · curso D3 y React con Yan Holtz",
    en: " · first cohort · D3 and React course by Yan Holtz",
  },
  "home.description": {
    es: "Cada módulo tiene sus lecciones y un proyecto que consolida lo aprendido.",
    en: "Each module has its lessons and a project that consolidates what was learned.",
  },
  "home.tips": {
    es: "Tips de curso:",
    en: "Course tips:",
  },
  "home.tips.text": {
    es: "D3 solo para la matemática (escalas, layouts, geometría), React y JSX para todo el rendering. Nada de",
    en: "D3 only for the math (scales, layouts, geometry), React and JSX for all rendering. No",
  },
  "home.tips.end": {
    es: "ni manipulación directa del DOM.",
    en: "or any direct DOM manipulation.",
  },

  // Proyecto 1
  "p1.title": {
    es: "¿De dónde son los estudiantes del primer cohorte del curso de D3 ❤ React?",
    en: "Where do the students of the first D3 ❤ React cohort come from?",
  },
  "p1.subtitle.pre": {
    es: "Yan Holtz logró reunir más de ",
    en: "Yan Holtz brought together more than ",
  },
  "p1.subtitle.mid": {
    es: " personas de ",
    en: " people from ",
  },
  "p1.subtitle.end": {
    es: " países (no olvidemos Colombia)",
    en: " countries (let's not forget Colombia)",
  },

  // Lollipop
  "lollipop.axis": {
    es: "NÚMERO DE ESTUDIANTES",
    en: "NUMBER OF STUDENTS",
  },
};

export function t(key, lang) {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry["es"] || key;
}
