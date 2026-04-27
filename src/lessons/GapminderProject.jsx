import { format, median, sum } from "d3";
import { data } from "../data/gapminder";
import BubblePlot from "../viz/BubblePlot";

const percentFormat = format(".0%");
const populationFormat = format(".2s");
const continents = [
  { name: "Africa", color: "#6fa4bf" },
  { name: "Americas", color: "#d49a44" },
  { name: "Asia", color: "#7fa36a" },
  { name: "Europe", color: "#bf746e" },
  { name: "Oceania", color: "#9f8ac4" },
];

function getQuadrantSummary(dataset) {
  const medianGdp = median(dataset, (d) => d.gdpPercap);
  const medianLife = median(dataset, (d) => d.lifeExp);
  const totalPopulation = sum(dataset, (d) => d.pop);

  const quadrants = [
    {
      id: 1,
      label: "Longevity and wealth",
      test: (d) => d.gdpPercap >= medianGdp && d.lifeExp >= medianLife,
    },
    {
      id: 2,
      label: "Longer lives, lower income",
      test: (d) => d.gdpPercap < medianGdp && d.lifeExp >= medianLife,
    },
    {
      id: 3,
      label: "Short life and poverty",
      test: (d) => d.gdpPercap < medianGdp && d.lifeExp < medianLife,
    },
    {
      id: 4,
      label: "Higher income, shorter lives",
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

export default function GapminderProject() {
  const quadrantSummary = getQuadrantSummary(data);
  const totalPopulation = sum(data, (d) => d.pop);
  const totalPopulationLabel = populationFormat(totalPopulation).replace("G", " billion");

  return (
    <div className="lesson-content gapminder-project">
      <h2>45% of the world population lives in countries with low income and low life expectancy</h2>
      <p className="lesson-subtitle">
        GDP per capita vs life expectancy across {continents.length} continents, {data.length} countries and{" "}
        {totalPopulationLabel} people. The lines mark the median of each variable.
      </p>

      <div className="viz-container gapminder-viz">
        <BubblePlot data={data} width={800} height={600} />
      </div>

      <section className="encoding-summary" aria-label="Cómo leer las burbujas">
        <div className="encoding-item">
          <span className="encoding-symbol encoding-bubbles" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <p>
            <strong>Size</strong>
            <span>country population</span>
          </p>
        </div>

        <div className="encoding-item encoding-colors">
          <p>
            <strong>Color</strong>
            <span>continent</span>
          </p>
          <span className="continent-key" aria-label="Colores por continente">
            {continents.map((continent) => (
              <span key={continent.name}>
                <i style={{ backgroundColor: continent.color }} />
                {continent.name}
              </span>
            ))}
          </span>
        </div>
      </section>

      <p className="quadrant-note">
        The median lines divide the chart into four ways of reading the relationship between income and years of life
        expectancy.
      </p>

      <section className="quadrant-summary" aria-label="Resumen de cuadrantes">
        {quadrantSummary.map((quadrant) => (
          <article key={quadrant.id} className="quadrant-summary-item">
            <span className="quadrant-summary-number">{quadrant.id}</span>
            <div>
              <h3>{quadrant.label}</h3>
              <p>
                {quadrant.countryCount} countries · {percentFormat(quadrant.populationShare)} of the population
              </p>
            </div>
          </article>
        ))}
      </section>

      <p className="chart-source">Source: Gapminder.</p>

      <p className="method-note">
        The medians for life expectancy and GDP per capita were calculated by ordering the 142 countries and taking the
        central value. Each country is classified according to whether it is above or below those medians. The population
        percentage is calculated by summing the population of the countries within each quadrant.
      </p>
    </div>
  );
}
