export default function AxisBottom({
  scale,
  y,
  tickCount = 6,
  tickFormat = (value) => value,
  label,
  labelOffset = 44,
}) {
  const ticks = scale.ticks(tickCount);

  return (
    <g className="axis axis-bottom" transform={`translate(0, ${y})`}>
      <line x1={scale.range()[0]} x2={scale.range()[1]} stroke="#2a2a2a" />
      {ticks.map((tick) => (
        <g key={tick} transform={`translate(${scale(tick)}, 0)`}>
          <line y2={6} stroke="#2a2a2a" />
          <text y={20} textAnchor="middle">
            {tickFormat(tick)}
          </text>
        </g>
      ))}
      <text
        className="axis-label"
        x={(scale.range()[0] + scale.range()[1]) / 2}
        y={labelOffset}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}
