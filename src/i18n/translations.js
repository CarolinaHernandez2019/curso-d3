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
  "home.subtitle.middle": {
    es: " · primer cohorte · curso ",
    en: " · first cohort · course ",
  },
  "home.course.link": {
    es: "D3 y React con Yan Holtz",
    en: "D3 and React by Yan Holtz",
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
    es: "Todo empieza con HTML, CSS y JavaScript. Tener una base sólida en estos tres lenguajes es esencial antes de pasar a React.",
    en: "Everything starts with HTML, CSS, and JavaScript. Establishing a solid understanding of these three languages is essential before moving on to React.",
  },
  "home.tip2": {
    es: "GitHub es perfecto para mostrar los proyectos: cada entrega queda publicada, compartible y lista para recibir feedback.",
    en: "GitHub is perfect for displaying the projects: each submission is published, shareable, and ready for feedback.",
  },
  "home.tip3": {
    es: "D3 solo para la matemática (escalas, layouts, geometría), React y JSX para todo el rendering.",
    en: "D3 only for the math (scales, layouts, geometry), React and JSX for all rendering.",
  },
  "home.tip4": {
    es: "React y D3 manejan el DOM, si los dos lo hacen al mismo tiempo se pelean y las cosas se rompen. Cuando vemos",
    en: "React and D3 both manage the DOM, if they do it at the same time they clash and things break. When we see",
  },
  "home.tip4.end": {
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
    es: "X = cantidad de casos. Se usa scaleLinear() para convertir números en ancho de barra y posición de la grilla.",
    en: "X = number of cases. Use scaleLinear() to turn numbers into bar width and grid positions.",
  },
  "p2.tip2": {
    es: "Y = nombre de la enfermedad. Se usa scaleBand() para repartir categorías con espacios consistentes.",
    en: "Y = disease name. Use scaleBand() to distribute categories with consistent spacing.",
  },
  "p2.tip3": {
    es: "Firma visual: línea roja superior, azul sobrio, fondo blanco, títulos negros y fuente de datos al pie.",
    en: "Visual signature: top red rule, restrained blue, white background, black titles, and source footer.",
  },
  "p2.tip4": {
    es: "Eje arriba: los ticks y la grilla vertical se leen desde la parte superior, no desde abajo.",
    en: "Top axis: ticks and vertical grid lines are read from the top, not from the bottom.",
  },
  "p2.tip5": {
    es: "Etiquetas inline: van dentro de las barras largas y afuera en las barras pequeñas para no perder legibilidad.",
    en: "Inline labels: place them inside long bars and outside short bars to preserve readability.",
  },
  "p2.tip6": {
    es: "Con esta herramienta, D3 calcula escalas y posiciones; React dibuja rectángulos, textos y líneas en JSX.",
    en: "With this tool, D3 calculates scales and positions; React draws rectangles, text, and lines in JSX.",
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
