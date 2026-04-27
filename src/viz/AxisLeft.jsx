export default function AxisLeft({
  scale,
  x,
  width,
  tickCount = 6,
  tickFormat = (value) => value,
  label,
  labelOffset = 44,
}) {
  const ticks = scale.ticks(tickCount);

  return (
    <g className="axis axis-left" transform={`translate(${x}, 0)`}>
      <line y1={scale.range()[0]} y2={scale.range()[1]} stroke="#2a2a2a" />
      {ticks.map((tick) => (
        <g key={tick} transform={`translate(0, ${scale(tick)})`}>
          <line x2={width} stroke="transparent" />
          <line x2={-6} stroke="#2a2a2a" />
          <text x={-12} dy="0.32em" textAnchor="end">
            {tickFormat(tick)}
          </text>
        </g>
      ))}
      {label ? (
        <text
          className="axis-label"
          transform={`translate(${-labelOffset}, ${(scale.range()[0] + scale.range()[1]) / 2}) rotate(-90)`}
          textAnchor="middle"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}
