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
    es: "Se debe tener una base en tres lenguajes antes de pasar a React: HTML, CSS y JavaScript.",
    en: "You should have a foundation in three languages before moving on to React: HTML, CSS, and JavaScript.",
  },
  "home.tip2": {
    es: "GitHub Pages es perfecto para compartir proyectos: cada uno queda publicado, compartible y listo para recibir feedback. Es un sitio estático, es decir, el navegador hace todo el trabajo y no pagas nada sin importar cuántas personas lo visiten. Otras plataformas como Vercel tienen más sentido si necesitas un backend detrás, autenticación, APIs privadas o algo por el estilo. Para un portafolio, es demasiado.",
    en: "GitHub Pages is perfect for sharing projects: each one gets published, shareable, and ready for feedback. It is a static site, meaning the browser does all the work and you pay nothing no matter how many people visit. Other platforms like Vercel make more sense if you need a backend running behind it, authentication, private APIs, that kind of thing. Overkill for a portfolio.",
  },
  "home.tip4": {
    es: "El conflicto histórico entre D3 viejo y React era que los dos querían controlar el DOM. La solución: D3 solo hace matemática, React hace todo el rendering.",
    en: "The historical conflict between old D3 and React was that both wanted to control the DOM. The solution: D3 only does the math, React handles all the rendering.",
  },
  "home.domNote": {
    es: "DOM significa Document Object Model: es la estructura que el navegador crea a partir del HTML para poder mostrar y actualizar la página.",
    en: "DOM means Document Object Model: it is the structure the browser creates from HTML so it can display and update the page.",
  },
  "home.structure.title": {
    es: "Estructura de carpetas del proyecto",
    en: "Project folder structure",
  },
  "home.structure.subtitle": {
    es: "Cómo organizar src/ a medida que crece el proyecto",
    en: "How to organize src/ as the project grows",
  },
  "home.structure.src": {
    es: "código fuente",
    en: "source code",
  },
  "home.structure.viz": {
    es: "gráficos D3+React (barplot, mapa, líneas)",
    en: "D3+React charts (barplot, map, lines)",
  },
  "home.structure.components": {
    es: "elementos reutilizables (botones, filtros, headers)",
    en: "reusable elements (buttons, filters, headers)",
  },
  "home.structure.pages": {
    es: "cada artículo o pieza narrativa",
    en: "each article or narrative piece",
  },
  "home.structure.ui": {
    es: "componentes ShadcnUI si se usan",
    en: "ShadcnUI components if you use them",
  },
  "home.shadcnNote": {
    es: "ShadcnUI es una librería de componentes de interfaz listos para usar (botones, modales, tablas, formularios, menús desplegables) con buen diseño por defecto.",
    en: "ShadcnUI is a library of ready-to-use interface components (buttons, modals, tables, forms, dropdown menus) with good default design.",
  },
  "home.yanTips.title": {
    es: "Tips específicos de Yan:",
    en: "Yan's specific tips:",
  },
  "home.yanTip1.title": {
    es: "viz/ separado de components/",
    en: "Keep viz/ separate from components/",
  },
  "home.yanTip1.body": {
    es: "Los gráficos van en su propia carpeta. No mezclar visualizaciones con componentes de UI.",
    en: "Charts go in their own folder. Do not mix visualizations with UI components.",
  },
  "home.yanTip2.title": {
    es: "Componente de página vs componente global",
    en: "Page component vs global component",
  },
  "home.yanTip2.body": {
    es: "Si un componente se usa en una sola página, guardarlo al nivel de esa página, no en components/.",
    en: "If a component is used on only one page, keep it at that page level, not in components/.",
  },
  "home.yanTip3.title": {
    es: "Nunca duplicar componentes similares",
    en: "Never duplicate similar components",
  },
  "home.yanTip3.body": {
    es: "No hacer BarplotJuventud.jsx y BarplotEducacion.jsx por separado. Hacer un Barplot.jsx genérico que recibe datos como prop. Usar props para customizar.",
    en: "Do not create BarplotYouth.jsx and BarplotEducation.jsx separately. Make a generic Barplot.jsx that receives data as a prop. Use props to customize.",
  },
  "home.yanTip4.title": {
    es: "Reutilizar siempre que sea posible",
    en: "Reuse whenever possible",
  },
  "home.yanTip4.body": {
    es: "Antes de crear algo nuevo, preguntarse si ya existe un componente que puede adaptarse.",
    en: "Before creating something new, ask whether an existing component can be adapted.",
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
