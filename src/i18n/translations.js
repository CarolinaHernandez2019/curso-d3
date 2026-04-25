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
  "home.note": {
    es: "Nota: en cada proyecto se incluye el ejercicio tal cual se pidió y un twist, una variación propia para explorar algo nuevo.",
    en: "Note: each project includes the exercise as requested plus a twist, a personal variation to explore something new.",
  },
  "home.tips": {
    es: "Tips de curso:",
    en: "Course tips:",
  },
  "home.tip1": {
    es: "D3 solo para la matemática (escalas, layouts, geometría), React y JSX para todo el rendering.",
    en: "D3 only for the math (scales, layouts, geometry), React and JSX for all rendering.",
  },
  "home.tip2": {
    es: "React y D3 manejan el DOM, si los dos lo hacen al mismo tiempo se pelean y las cosas se rompen. Cuando vemos",
    en: "React and D3 both manage the DOM, if they do it at the same time they clash and things break. When we see",
  },
  "home.tip2.end": {
    es: "en un tutorial, eso es D3 puro; acá dibujamos con React y D3 solo hace la matemática.",
    en: "in a tutorial, that's pure D3; here we draw with React and D3 only does the math.",
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

  // Proyecto 2
  "p2.title": {
    es: "Los mismos estudiantes, ahora como un treemap por continente",
    en: "The same students, now as a treemap by continent",
  },
  "p2.subtitle": {
    es: "D3 calcula la jerarquía y el layout; React dibuja cada rectángulo. Europa aparece como el bloque más diverso y Colombia queda resaltada en amarillo.",
    en: "D3 calculates the hierarchy and layout; React draws every rectangle. Europe appears as the most diverse block and Colombia is highlighted in yellow.",
  },
  "p2.legend": {
    es: "Leyenda por continente",
    en: "Legend by continent",
  },
  "continent.North America": { es: "Norteamérica", en: "North America" },
  "continent.Europe": { es: "Europa", en: "Europe" },
  "continent.Asia": { es: "Asia", en: "Asia" },
  "continent.Oceania": { es: "Oceanía", en: "Oceania" },
  "continent.South America": { es: "Suramérica", en: "South America" },

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
