import { max, scaleBand, scaleLinear } from "d3";

const MARGIN = { top: 156, right: 42, bottom: 54, left: 0 };
const BLUE = "#3f75a5";
const RED = "#e33027";
const INK = "#071a38";
const MUTED = "#6f747c";
const GRID = "#e3e3e3";

export default function EconomistBarChart({ data, width = 820, height = 540 }) {
  const sortedData = [...data].sort((a, b) => b.count - a.count);
  const innerWidth = width - MARGIN.left - MARGIN.right;
  const innerHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = scaleLinear()
    .domain([0, max(sortedData, (d) => d.count) || 0])
    .range([0, innerWidth])
    .nice();

  const yScale = scaleBand()
    .domain(sortedData.map((d) => d.name))
    .range([0, innerHeight])
    .padding(0.35);

  const ticks = xScale.ticks(11);
  const labelBreakpoint = 9;

  return (
    <svg
      className="economist-chart"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-labelledby="economist-title economist-desc"
    >
      <title id="economist-title">Escape artists</title>
      <desc id="economist-desc">
        Number of laboratory-acquired infections between 1970 and 2021.
      </desc>

      <line x1={0} x2={width - 56} y1={24} y2={24} stroke={RED} strokeWidth={2} />
      <rect x={0} y={24} width={44} height={10} fill={RED} />

      <text x={0} y={64} fill={INK} fontSize={26} fontWeight={800}>
        Escape artists
      </text>
      <text x={0} y={104} fill={INK} fontSize={21} fontWeight={400}>
        Number of laboratory-acquired infections, 1970-2021
      </text>

      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        {ticks.map((tick) => (
          <g key={tick} transform={`translate(${xScale(tick)}, 0)`}>
            <text
              y={-10}
              textAnchor="middle"
              fill={MUTED}
              fontSize={16}
              fontWeight={400}
            >
              {tick}
            </text>
            <line y1={0} y2={innerHeight + 4} stroke={GRID} strokeWidth={1} />
          </g>
        ))}

        <line y1={-3} y2={innerHeight + 4} stroke="#222222" strokeWidth={1.5} />

        {sortedData.map((d) => {
          const y = yScale(d.name);
          const barWidth = xScale(d.count);
          const barHeight = yScale.bandwidth();
          const labelInside = d.count > labelBreakpoint;

          return (
            <g key={d.name}>
              <rect x={0} y={y} width={barWidth} height={barHeight} fill={BLUE} />
              <text
                x={labelInside ? 8 : barWidth + 8}
                y={y + barHeight / 2}
                dominantBaseline="middle"
                fill={labelInside ? "#ffffff" : "#2c6090"}
                fontSize={17}
                fontWeight={labelInside ? 700 : 500}
              >
                {d.name}
              </text>
            </g>
          );
        })}
      </g>

      <text x={0} y={height - 28} fill={MUTED} fontSize={14}>
        Sources: Laboratory-Acquired Infection Database; American Biological Safety Association
      </text>
      <text x={0} y={height - 8} fill={MUTED} fontSize={14}>
        The Economist
      </text>
    </svg>
  );
}
