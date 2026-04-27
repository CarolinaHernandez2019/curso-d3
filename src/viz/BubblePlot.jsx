import { extent, format, max, median, scaleLinear, scaleOrdinal, scaleSqrt } from "d3";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";

const margin = { top: 42, right: 50, bottom: 118, left: 104 };
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

const continentColors = ["#6fa4bf", "#d49a44", "#7fa36a", "#bf746e", "#9f8ac4"];
const commaFormat = format(",");
const oneDecimal = format(".1f");

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

  const quadrantLabels = [
    {
      text: "1",
      x: xRange[1] - 16,
      y: yRange[1] + 24,
      anchor: "end",
    },
    {
      text: "3",
      x: medianX - 14,
      y: yRange[0] - 18,
      anchor: "end",
    },
    {
      text: "2",
      x: xRange[0] + 16,
      y: yRange[1] + 24,
      anchor: "start",
    },
    {
      text: "4",
      x: xRange[1] - 16,
      y: yRange[0] - 18,
      anchor: "end",
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
      <defs>
        <marker
          id="axis-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#6a6a6a" />
        </marker>
      </defs>

      <line
        className="direction-arrow"
        x1={margin.left - 54}
        x2={margin.left - 54}
        y1={margin.top + boundsHeight}
        y2={margin.top + 6}
        markerEnd="url(#axis-arrow)"
      />
      <text
        className="direction-label direction-label-y"
        x={margin.left - 76}
        y={margin.top + boundsHeight / 2}
        textAnchor="middle"
        transform={`rotate(-90 ${margin.left - 76} ${margin.top + boundsHeight / 2})`}
      >
        Life expectancy
      </text>

      <line
        className="direction-arrow"
        x1={margin.left}
        x2={margin.left + boundsWidth}
        y1={height - 58}
        y2={height - 58}
        markerEnd="url(#axis-arrow)"
      />
      <text className="direction-label direction-label-x" x={margin.left + boundsWidth / 2} y={height - 34} textAnchor="middle">
        GDP per capita
      </text>
      <rect
        className="quadrant-shade"
        x={medianX}
        y={margin.top}
        width={xRange[1] - medianX}
        height={medianY - margin.top}
      />
      <rect
        className="quadrant-shade"
        x={margin.left}
        y={medianY}
        width={medianX - margin.left}
        height={yRange[0] - medianY}
      />

      {quadrantLabels.map((label) => (
        <text key={label.text} className="quadrant-label" x={label.x} y={label.y} textAnchor={label.anchor}>
          {label.text}
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
        median {oneDecimal(medianLife)} years
      </text>
      <text className="median-label" x={medianX + 8} y={margin.top + 14}>
        median ${commaFormat(Math.round(medianGdp))}
      </text>

      {sortedData.map((d) => (
        <circle
          key={d.country}
          cx={xScale(d.gdpPercap)}
          cy={yScale(d.lifeExp)}
          r={sizeScale(d.pop)}
          fill={colorScale(d.continent)}
          opacity={0.78}
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
        labelOffset={42}
        label=""
      />
      <AxisLeft
        scale={yScale}
        x={margin.left}
        width={boundsWidth}
        tickFormat={(value) => value}
        label=""
      />
    </svg>
  );
}
