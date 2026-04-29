import { format, median, sum } from "d3";
import { data } from "../data/gapminder";
import BubblePlot from "../viz/BubblePlot";

const percentFormat = format(".0%");
const populationFormat = format(".2s");
const continents = [
  { key: "Africa", color: "#7fa36a" },
  { key: "Americas", color: "#d49a44" },
  { key: "Asia", color: "#bf746e" },
  { key: "Europe", color: "#6fa4bf" },
  { key: "Oceania", color: "#9f8ac4" },
];

const copy = {
  es: {
    title: "El 45% de la población mundial vive en países con bajo ingreso y baja longevidad",
    subtitle: (continentCount, countryCount, populationLabel) =>
      `PIB per cápita vs esperanza de vida en ${continentCount} continentes, ${countryCount} países y ${populationLabel} de habitantes. Las líneas marcan la mediana de cada variable.`,
    size: "Tamaño",
    sizeDescription: "población del país",
    sizeLegend: { small: "10M", medium: "100M", large: "1.000M" },
    color: "Color",
    colorDescription: "continente",
    continentNames: {
      Africa: "África",
      Americas: "Américas",
      Asia: "Asia",
      Europe: "Europa",
      Oceania: "Oceanía",
    },
    quadrantNote:
      "Las líneas medianas dividen el gráfico en cuatro formas de leer la relación entre ingresos y años de esperanza de vida.",
    quadrants: {
      1: "Longevidad y riqueza",
      2: "Más años, menor ingreso",
      3: "Vida corta y pobreza",
      4: "Más ingreso, menos años",
    },
    countries: "países",
    populationShare: "de la población",
    source: "Fuente: Gapminder (2007). PIB en dólares internacionales, PPP.",
    method:
      "Las medianas de esperanza de vida y PIB per cápita se calcularon ordenando los 142 países y tomando el valor central. Cada país se clasifica según si está arriba o abajo de esas medianas. El porcentaje de población se calcula sumando la población de los países dentro de cada cuadrante.",
    populationUnit: " mil millones",
  },
  en: {
    title: "45% of the world population lives in countries with low income and low life expectancy",
    subtitle: (continentCount, countryCount, populationLabel) =>
      `GDP per capita vs life expectancy across ${continentCount} continents, ${countryCount} countries and ${populationLabel} people. The lines mark the median of each variable.`,
    size: "Size",
    sizeDescription: "country population",
    sizeLegend: { small: "10M", medium: "100M", large: "1B" },
    color: "Color",
    colorDescription: "continent",
    continentNames: {
      Africa: "Africa",
      Americas: "Americas",
      Asia: "Asia",
      Europe: "Europe",
      Oceania: "Oceania",
    },
    quadrantNote:
      "The median lines divide the chart into four ways of reading the relationship between income and years of life expectancy.",
    quadrants: {
      1: "Longevity and wealth",
      2: "Longer lives, lower income",
      3: "Short life and poverty",
      4: "Higher income, shorter lives",
    },
    countries: "countries",
    populationShare: "of the population",
    source: "Source: Gapminder (2007). GDP in international dollars, PPP.",
    method:
      "The medians for life expectancy and GDP per capita were calculated by ordering the 142 countries and taking the central value. Each country is classified according to whether it is above or below those medians. The population percentage is calculated by summing the population of the countries within each quadrant.",
    populationUnit: " billion",
  },
};

function getQuadrantSummary(dataset, labels) {
  const medianGdp = median(dataset, (d) => d.gdpPercap);
  const medianLife = median(dataset, (d) => d.lifeExp);
  const totalPopulation = sum(dataset, (d) => d.pop);

  const quadrants = [
    {
      id: 1,
      label: labels[1],
      test: (d) => d.gdpPercap >= medianGdp && d.lifeExp >= medianLife,
    },
    {
      id: 2,
      label: labels[2],
      test: (d) => d.gdpPercap < medianGdp && d.lifeExp >= medianLife,
    },
    {
      id: 3,
      label: labels[3],
      test: (d) => d.gdpPercap < medianGdp && d.lifeExp < medianLife,
    },
    {
      id: 4,
      label: labels[4],
      test: (d) => d.gdpPercap >= medianGdp && d.lifeExp < medianLife,
    },
  ];

  return quadrants.map((quadrant) => {
    const countries = dataset.filter(quadrant.test);
    const population = sum(countries, (d) => d.pop);

    return {
      ...quadrant,
      countryCount: countries.length,
      countryShare: countries.length / dataset.length,
      populationShare: population / totalPopulation,
    };
  });
}

export default function GapminderProject({ lang = "es" }) {
  const text = copy[lang] ?? copy.es;
  const quadrantSummary = getQuadrantSummary(data, text.quadrants);
  const totalPopulation = sum(data, (d) => d.pop);
  const totalPopulationLabel = populationFormat(totalPopulation).replace("G", text.populationUnit);

  return (
    <div className="lesson-content gapminder-project">
      <h2>{text.title}</h2>
      <p className="lesson-subtitle">{text.subtitle(continents.length, data.length, totalPopulationLabel)}</p>

      <div className="viz-container gapminder-viz">
        <BubblePlot data={data} width={800} height={600} lang={lang} />
      </div>

      <section className="encoding-summary" aria-label="Cómo leer las burbujas">
        <div className="encoding-item">
          <svg
            className="encoding-size-svg"
            width="110"
            height="52"
            viewBox="0 0 110 52"
            aria-hidden="true"
          >
            <circle cx="24" cy="28" r="22" fill="rgba(140,140,140,0.12)" stroke="#9a9a9a" strokeWidth="1" />
            <circle cx="24" cy="38" r="12" fill="rgba(140,140,140,0.16)" stroke="#9a9a9a" strokeWidth="1" />
            <circle cx="24" cy="46" r="4" fill="rgba(140,140,140,0.22)" stroke="#9a9a9a" strokeWidth="1" />
            <line x1="46" x2="60" y1="6" y2="6" stroke="#b5b5b5" strokeWidth="0.7" />
            <line x1="36" x2="60" y1="26" y2="26" stroke="#b5b5b5" strokeWidth="0.7" />
            <line x1="28" x2="60" y1="42" y2="42" stroke="#b5b5b5" strokeWidth="0.7" />
            <text x="62" y="9" fontSize="9.5" fill="#666">{text.sizeLegend.large}</text>
            <text x="62" y="29" fontSize="9.5" fill="#666">{text.sizeLegend.medium}</text>
            <text x="62" y="45" fontSize="9.5" fill="#666">{text.sizeLegend.small}</text>
          </svg>
          <p>
            <strong>{text.size}</strong>
            <span>{text.sizeDescription}</span>
          </p>
        </div>

        <div className="encoding-item encoding-colors">
          <p>
            <strong>{text.color}</strong>
            <span>{text.colorDescription}</span>
          </p>
          <span className="continent-key" aria-label="Colores por continente">
            {continents.map((continent) => (
              <span key={continent.key}>
                <i style={{ backgroundColor: continent.color }} />
                {text.continentNames[continent.key]}
              </span>
            ))}
          </span>
        </div>
      </section>

      <p className="quadrant-note">{text.quadrantNote}</p>

      <section className="quadrant-summary" aria-label="Resumen de cuadrantes">
        {quadrantSummary.map((quadrant) => (
          <article key={quadrant.id} className="quadrant-summary-item">
            <span className="quadrant-summary-number">{quadrant.id}</span>
            <div>
              <h3>{quadrant.label}</h3>
              <p>
                {quadrant.countryCount} {text.countries} · {percentFormat(quadrant.populationShare)}{" "}
                {text.populationShare}
              </p>
            </div>
          </article>
        ))}
      </section>

      <p className="chart-source">{text.source}</p>

      <p className="method-note">{text.method}</p>
    </div>
  );
}
