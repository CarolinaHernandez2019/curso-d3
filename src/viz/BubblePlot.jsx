import { extent, format, max, median, scaleLinear, scaleOrdinal, scaleSqrt, sum } from "d3";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import BubbleLegend from "./BubbleLegend";
import ColorLegend from "./ColorLegend";

const margin = { top: 80, right: 50, bottom: 60, left: 60 };
const labelCountries = new Set([
  "Colombia",
  "Chile",
  "Brazil",
  "Mexico",
  "United States",
  "Japan",
  "Norway",
  "India",
  "China",
  "South Africa",
  "Nigeria",
]);

const labelOffsets = {
  China: { dx: -8, dy: -16, anchor: "end" },
  India: { dx: 12, dy: 16, anchor: "start" },
  "United States": { dx: 10, dy: -12, anchor: "start" },
  Japan: { dx: 10, dy: -12, anchor: "start" },
  Norway: { dx: -10, dy: -10, anchor: "end" },
  Nigeria: { dx: 12, dy: -6, anchor: "start" },
  "South Africa": { dx: 12, dy: 14, anchor: "start" },
  Mexico: { dx: 10, dy: -8, anchor: "start" },
  Brazil: { dx: 10, dy: 12, anchor: "start" },
  Chile: { dx: -10, dy: -10, anchor: "end" },
  Colombia: { dx: 10, dy: 12, anchor: "start" },
};

const continentColors = ["#8fb7c9", "#d8a365", "#96b68b", "#c9857f", "#b7a7cf"];
const commaFormat = format(",");
const oneDecimal = format(".1f");
const percentFormat = format(".0%");

export default function BubblePlot({ data, width = 800, height = 600 }) {
  const boundsWidth = width - margin.left - margin.right;
  const boundsHeight = height - margin.top - margin.bottom;
  const [, maxGdp] = extent(data, (d) => d.gdpPercap);
  const [minLife, maxLife] = extent(data, (d) => d.lifeExp);
  const maxPopulation = max(data, (d) => d.pop);
  const medianGdp = median(data, (d) => d.gdpPercap);
  const medianLife = median(data, (d) => d.lifeExp);
  const continents = Array.from(new Set(data.map((d) => d.continent))).sort();

  const xScale = scaleLinear()
    .domain([0, maxGdp * 1.05])
    .range([margin.left, margin.left + boundsWidth])
    .nice();

  const yScale = scaleLinear()
    .domain([Math.max(30, Math.floor(minLife - 3)), Math.ceil(maxLife + 2)])
    .range([margin.top + boundsHeight, margin.top])
    .nice();

  const sizeScale = scaleSqrt().domain([0, maxPopulation]).range([2.5, 28]);
  const colorScale = scaleOrdinal().domain(continents).range(continentColors);
  const sortedData = [...data].sort((a, b) => b.pop - a.pop);
  const medianX = xScale(medianGdp);
  const medianY = yScale(medianLife);
  const xRange = xScale.range();
  const yRange = yScale.range();
  const totalPopulation = sum(data, (d) => d.pop);
  const quadrantStats = data.reduce(
    (stats, d) => {
      if (d.gdpPercap >= medianGdp && d.lifeExp >= medianLife) {
        stats.topRight.countries += 1;
        stats.topRight.population += d.pop;
      }

      if (d.gdpPercap < medianGdp && d.lifeExp < medianLife) {
        stats.bottomLeft.countries += 1;
        stats.bottomLeft.population += d.pop;
      }

      if (d.gdpPercap < medianGdp && d.lifeExp >= medianLife) {
        stats.topLeft.countries += 1;
        stats.topLeft.population += d.pop;
      }

      if (d.gdpPercap >= medianGdp && d.lifeExp < medianLife) {
        stats.bottomRight.countries += 1;
        stats.bottomRight.population += d.pop;
      }

      return stats;
    },
    {
      topRight: { countries: 0, population: 0 },
      bottomLeft: { countries: 0, population: 0 },
      topLeft: { countries: 0, population: 0 },
      bottomRight: { countries: 0, population: 0 },
    },
  );

  const describeQuadrant = (text, stats) => ({
    text,
    countries: stats.countries,
    countryShare: stats.countries / data.length,
    populationShare: stats.population / totalPopulation,
  });

  const quadrantLabels = [
    {
      ...describeQuadrant("Longevity and wealth", quadrantStats.topRight),
      x: (medianX + xRange[1]) / 2,
      y: (yRange[1] + medianY) / 2,
    },
    {
      ...describeQuadrant("Short life and poverty", quadrantStats.bottomLeft),
      x: (xRange[0] + medianX) / 2,
      y: (medianY + yRange[0]) / 2,
    },
    {
      ...describeQuadrant("Longer lives despite low income", quadrantStats.topLeft),
      x: (xRange[0] + medianX) / 2,
      y: (yRange[1] + medianY) / 2,
    },
    {
      ...describeQuadrant("Wealthier but shorter lives", quadrantStats.bottomRight),
      x: (medianX + xRange[1]) / 2,
      y: (medianY + yRange[0]) / 2,
    },
  ];

  return (
    <svg
      className="bubble-plot"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Bubble plot of GDP per capita and life expectancy by country"
    >
      <text className="chart-title" x={margin.left} y={30}>
        <tspan x={margin.left}>La mayoría de la humanidad vive con poco ingreso</tspan>
        <tspan x={margin.left} dy="1.1em">
          pero cada vez más años
        </tspan>
      </text>
      <text className="chart-subtitle" x={margin.left} y={72}>
        Países de Gapminder, tamaño por población y color por continente
      </text>

      {quadrantLabels.map((label) => (
        <text key={label.text} className="quadrant-label" x={label.x} y={label.y} textAnchor="middle">
          <tspan x={label.x}>{label.text}</tspan>
          <tspan x={label.x} dy="1.35em">
            {label.countries} países ({percentFormat(label.countryShare)})
          </tspan>
          <tspan x={label.x} dy="1.35em">
            {percentFormat(label.populationShare)} de la población
          </tspan>
        </text>
      ))}

      <line
        className="median-line"
        x1={margin.left}
        x2={margin.left + boundsWidth}
        y1={medianY}
        y2={medianY}
      />
      <line
        className="median-line"
        x1={medianX}
        x2={medianX}
        y1={margin.top}
        y2={margin.top + boundsHeight}
      />
      <text className="median-label" x={margin.left + 8} y={medianY - 8}>
        Median: {oneDecimal(medianLife)} years
      </text>
      <text className="median-label" x={medianX + 8} y={margin.top + 14}>
        Median: ${commaFormat(Math.round(medianGdp))}
      </text>

      {sortedData.map((d) => (
        <circle
          key={d.country}
          cx={xScale(d.gdpPercap)}
          cy={yScale(d.lifeExp)}
          r={sizeScale(d.pop)}
          fill={colorScale(d.continent)}
          opacity={0.7}
          stroke="rgba(255,255,255,0.72)"
          strokeWidth={0.7}
        />
      ))}

      {sortedData
        .filter((d) => labelCountries.has(d.country))
        .map((d) => {
          const offset = labelOffsets[d.country] ?? { dx: 9, dy: -9, anchor: "start" };

          return (
            <text
              key={`${d.country}-label`}
              className="country-label"
              x={xScale(d.gdpPercap) + offset.dx}
              y={yScale(d.lifeExp) + offset.dy}
              textAnchor={offset.anchor}
            >
              {d.country}
            </text>
          );
        })}

      <AxisBottom
        scale={xScale}
        y={margin.top + boundsHeight}
        tickFormat={(value) => commaFormat(value)}
        label="GDP per capita (USD)"
      />
      <AxisLeft
        scale={yScale}
        x={margin.left}
        width={boundsWidth}
        tickFormat={(value) => value}
        label="Life Expectancy (years)"
      />
      <BubbleLegend
        sizeScale={sizeScale}
        values={[10000000, 100000000, 1000000000]}
        x={width - margin.right - 142}
        y={height - margin.bottom - 96}
      />
      <ColorLegend
        items={continents}
        colorScale={colorScale}
        x={margin.left + 8}
        y={height - 18}
      />
    </svg>
  );
}
