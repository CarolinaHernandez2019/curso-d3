import { scaleBand, scaleLinear, max } from "d3";
import { t } from "../i18n/translations";

const MARGIN = { top: 30, right: 60, bottom: 40, left: 140 };

export default function Lollipop({ data, lang = "es", width = 720, height = 580 }) {
  const innerWidth = width - MARGIN.left - MARGIN.right;
  const innerHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = scaleBand()
    .domain(data.map((d) => d[lang]))
    .range([0, innerHeight])
    .padding(0.35);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.students) || 0])
    .range([0, innerWidth])
    .nice();

  const xTicks = xScale.ticks(5);

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <defs>
        {data.map((d) => {
          const y = yScale(d[lang]) + yScale.bandwidth() / 2;
          const xEnd = xScale(d.students);
          const r = d.highlight ? 10 : 8;
          return (
            <clipPath key={`clip-${d.code}`} id={`clip-${d.code}`}>
              <circle cx={xEnd} cy={y} r={r} />
            </clipPath>
          );
        })}
      </defs>

      <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
        {xTicks.map((tick) => (
          <g key={tick} transform={`translate(${xScale(tick)},0)`}>
            <line y1={0} y2={innerHeight} stroke="#e8e8e8" strokeWidth={1} />
            <text
              y={innerHeight + 20}
              textAnchor="middle"
              fontSize={11}
              fill="#999"
              fontFamily="Montserrat, sans-serif"
            >
              {tick}
            </text>
          </g>
        ))}

        <text
          x={innerWidth / 2}
          y={innerHeight + 36}
          textAnchor="middle"
          fontSize={11}
          fill="#666"
          fontFamily="Montserrat, sans-serif"
          letterSpacing={1.2}
        >
          {t("lollipop.axis", lang)}
        </text>

        {data.map((d) => {
          const y = yScale(d[lang]) + yScale.bandwidth() / 2;
          const xEnd = xScale(d.students);
          const isHighlight = d.highlight === true;
          const r = isHighlight ? 10 : 8;
          const lineColor = isHighlight ? "#FCD116" : "#1a1a1a";
          const flagUrl = `https://flagcdn.com/w40/${d.code}.png`;

          return (
            <g key={d[lang]}>
              {/* Nombre del país */}
              <text
                x={-12}
                y={y}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize={12}
                fill={isHighlight ? "#b89300" : "#1a1a1a"}
                fontWeight={isHighlight ? 700 : 500}
                fontFamily="Montserrat, sans-serif"
              >
                {d[lang]}
              </text>

              {/* Palito */}
              <line
                x1={0}
                y1={y}
                x2={xEnd}
                y2={y}
                stroke={lineColor}
                strokeWidth={isHighlight ? 2.5 : 1.5}
                strokeLinecap="round"
              />

              {/* Borde del círculo (se ve detrás de la bandera) */}
              <circle
                cx={xEnd}
                cy={y}
                r={r + 1.5}
                fill="none"
                stroke={isHighlight ? "#FCD116" : "#1a1a1a"}
                strokeWidth={isHighlight ? 2.5 : 1.5}
              />

              {/* Bandera recortada en círculo */}
              <image
                href={flagUrl}
                x={xEnd - r * 1.4}
                y={y - r}
                width={r * 2.8}
                height={r * 2}
                clipPath={`url(#clip-${d.code})`}
                preserveAspectRatio="xMidYMid slice"
              />

              {/* Número */}
              <text
                x={xEnd + r + 8}
                y={y}
                dominantBaseline="middle"
                fontSize={11}
                fill={isHighlight ? "#b89300" : "#666"}
                fontWeight={isHighlight ? 700 : 500}
                fontFamily="Montserrat, sans-serif"
              >
                {d.students}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
