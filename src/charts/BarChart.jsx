// Gráfico de barras horizontales — estilo minimalista, barras negras.
// D3 solo para escalas, React para renderizar.

import { scaleBand, scaleLinear, max } from "d3";
import { t } from "../i18n/translations";

const MARGIN = { top: 30, right: 60, bottom: 40, left: 140 };

export default function BarChart({ data, lang = "es", width = 720, height = 580 }) {
  const innerWidth = width - MARGIN.left - MARGIN.right;
  const innerHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = scaleBand()
    .domain(data.map((d) => d[lang]))
    .range([0, innerHeight])
    .padding(0.25);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.students) || 0])
    .range([0, innerWidth])
    .nice();

  const xTicks = xScale.ticks(5);

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
        {/* Líneas de referencia verticales */}
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

        {/* Etiqueta del eje X */}
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

        {/* Barras */}
        {data.map((d) => {
          const y = yScale(d[lang]);
          const barWidth = xScale(d.students);
          const barHeight = yScale.bandwidth();
          const isHighlight = d.highlight === true;
          const fillColor = isHighlight ? "#FCD116" : "#1a1a1a";

          return (
            <g key={d[lang]}>
              {/* Nombre del país */}
              <text
                x={-12}
                y={y + barHeight / 2}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize={12}
                fill={isHighlight ? "#b89300" : "#1a1a1a"}
                fontWeight={isHighlight ? 700 : 500}
                fontFamily="Montserrat, sans-serif"
              >
                {d[lang]}
              </text>

              {/* Barra */}
              <rect
                x={0}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={fillColor}
                rx={3}
              />

              {/* Número al final */}
              <text
                x={barWidth + 8}
                y={y + barHeight / 2}
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
