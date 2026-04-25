import { scaleBand, scaleLinear } from "d3";

const MARGIN = { top: 156, right: 42, bottom: 54, left: 0 };
const BAR_PADDING = 0.4;
const BLUE = "#076fa2";
const RED = "#e33027";
const INK = "#071a38";
const MUTED = "#6f747c";
const GRID = "#808080";

export default function EconomistBarChart({ data, width = 820, height = 540 }) {
  const sortedData = [...data].sort((a, b) => b.count - a.count);
  const innerWidth = width - MARGIN.left - MARGIN.right;
  const innerHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = scaleLinear().domain([0, 55]).range([0, innerWidth]);

  const yScale = scaleBand()
    .domain(sortedData.map((d) => d.name))
    .range([0, innerHeight])
    .paddingInner(BAR_PADDING)
    .paddingOuter(0.1);

  const ticks = xScale.ticks(10);
  const labelBreakpoint = 7;

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
        {ticks.slice(1).map((tick) => (
          <g key={tick} transform={`translate(${xScale(tick)}, 0)`}>
            <text
              y={-10}
              textAnchor="middle"
              fill={MUTED}
              fontSize={12}
              fontWeight={400}
            >
              {tick}
            </text>
            <line y1={0} y2={innerHeight + 4} stroke={GRID} strokeWidth={1} opacity={0.2} />
          </g>
        ))}

        <line y1={-3} y2={innerHeight + 4} stroke="#222222" strokeWidth={1.5} />
        <text y={-10} textAnchor="middle" fill={MUTED} fontSize={12} fontWeight={400}>
          0
        </text>

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
                fill={labelInside ? "#ffffff" : BLUE}
                fillOpacity={labelInside ? 0.9 : 1}
                fontSize={14}
                fontWeight={500}
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
