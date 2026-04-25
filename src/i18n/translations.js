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
    es: "Recreando un gráfico estilo The Economist",
    en: "Recreating a chart in The Economist style",
  },
  "p2.subtitle": {
    es: "Proyecto del módulo de escalas: barras horizontales, grilla superior, etiquetas inline y pie de fuente.",
    en: "Scales module project: horizontal bars, top grid, inline labels, and source footer.",
  },
  "p2.tips.title": {
    es: "Tips estilo The Economist",
    en: "The Economist style tips",
  },
  "p2.tip1": {
    es: "Una línea roja superior funciona como firma visual y separa la gráfica del resto de la página.",
    en: "A top red rule works as a visual signature and separates the chart from the rest of the page.",
  },
  "p2.tip2": {
    es: "El título es corto, fuerte y en negrita; el subtítulo explica exactamente qué se está midiendo.",
    en: "The title is short, strong, and bold; the subtitle states exactly what is being measured.",
  },
  "p2.tip3": {
    es: "Los valores del eje van arriba y la grilla vertical guía la lectura sin competir con las barras.",
    en: "Axis values sit at the top and vertical grid lines guide reading without competing with the bars.",
  },
  "p2.tip4": {
    es: "Las etiquetas van dentro de las barras cuando hay espacio y afuera cuando la barra es pequeña.",
    en: "Labels go inside bars when there is room and outside when the bar is small.",
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
