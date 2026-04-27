import { format } from "d3";

const formatPopulation = format(".2s");

export default function BubbleLegend({ sizeScale, values, x, y }) {
  const largestRadius = sizeScale(values[values.length - 1]);

  return (
    <g className="bubble-legend" transform={`translate(${x}, ${y})`}>
      <text className="legend-title" y={-largestRadius - 18}>
        Population
      </text>
      {values.map((value) => {
        const radius = sizeScale(value);
        const labelY = -radius;

        return (
          <g key={value}>
            <circle
              r={radius}
              fill="none"
              stroke="#747474"
              strokeDasharray="2 3"
              strokeWidth={1}
            />
            <line x1={radius} x2={largestRadius + 34} y1={labelY} y2={labelY} stroke="#b5b5b5" />
            <text x={largestRadius + 40} y={labelY} dy="0.32em">
              {formatPopulation(value).replace("G", "B")}
            </text>
          </g>
        );
      })}
    </g>
  );
}
