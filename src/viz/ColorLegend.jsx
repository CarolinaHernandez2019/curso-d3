export default function ColorLegend({ items, colorScale, x, y }) {
  return (
    <g className="color-legend" transform={`translate(${x}, ${y})`}>
      {items.map((item, index) => (
        <g key={item} transform={`translate(${index * 114}, 0)`}>
          <circle r={5} fill={colorScale(item)} opacity={0.85} />
          <text x={12} dy="0.32em">
            {item}
          </text>
        </g>
      ))}
    </g>
  );
}
