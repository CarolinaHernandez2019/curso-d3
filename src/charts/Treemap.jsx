// Componente Treemap — agrupa los países por continente y los muestra como bloques
// cuyo tamaño es proporcional al número de estudiantes.
//
// Arquitectura del curso: D3 solo para calcular posiciones y tamaños (d3.hierarchy
// + d3.treemap), React/JSX para renderizar <rect> y <text>.
//
// Cada continente tiene un color base tomado de la paleta minimalista (grises + negro).
// Colombia se resalta en amarillo bandera porque está en la misma región que Brasil
// (South America) pero es la que Carolina agrega al dataset.

import { hierarchy, treemap as d3treemap } from "d3";
import { continentColors } from "../data/cohortData";

export default function Treemap({ data, width = 720, height = 560 }) {
  // Agrupamos los países por continente. El resultado es un objeto del tipo:
  // { "Europe": [France, Germany, ...], "Asia": [...], ... }
  const byContinent = data.reduce((acc, d) => {
    if (!acc[d.continent]) acc[d.continent] = [];
    acc[d.continent].push(d);
    return acc;
  }, {});

  // Construimos la jerarquía que D3 necesita: un nodo raíz con hijos (continentes),
  // y cada continente con sus países como hojas.
  const root = hierarchy({
    name: "root",
    children: Object.entries(byContinent).map(([continent, countries]) => ({
      name: continent,
      children: countries.map((c) => ({
        name: c.country,
        value: c.students,
        highlight: c.highlight,
      })),
    })),
  }).sum((d) => d.value || 0);

  // d3.treemap calcula x0, y0, x1, y1 para cada nodo según su valor.
  d3treemap()
    .size([width, height])
    .paddingOuter(4)
    .paddingTop(26)
    .paddingInner(3)
    .round(true)(root);

  // Nodos de primer nivel (continentes) — los dibujamos como fondo coloreado.
  const continents = root.children || [];

  // Hojas (países) — los dibujamos encima como bloques oscuros con label.
  const leaves = root.leaves();

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      {/* Bloques de fondo por continente */}
      {continents.map((node) => {
        const w = node.x1 - node.x0;
        const h = node.y1 - node.y0;
        return (
          <g key={`c-${node.data.name}`} transform={`translate(${node.x0},${node.y0})`}>
            <rect
              width={w}
              height={h}
              fill="#f5f5f5"
              stroke="#e0e0e0"
              strokeWidth={1}
            />
            <text
              x={10}
              y={17}
              fontSize={10}
              fontWeight={700}
              letterSpacing={1.5}
              fill="#666"
              fontFamily="Montserrat, sans-serif"
            >
              {node.data.name.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* Países — cada hoja */}
      {leaves.map((node) => {
        const w = node.x1 - node.x0;
        const h = node.y1 - node.y0;
        const isHighlight = node.data.highlight === true;
        const continentName = node.parent.data.name;
        const baseColor = continentColors[continentName] || "#1a1a1a";
        const fillColor = isHighlight ? "#FCD116" : baseColor;

        // Solo mostramos el label si el bloque es lo bastante grande
        const showLabel = w > 50 && h > 30;
        const showValue = w > 40 && h > 45;

        return (
          <g key={node.data.name} transform={`translate(${node.x0},${node.y0})`}>
            <rect
              width={w}
              height={h}
              fill={fillColor}
              stroke={isHighlight ? "#b89300" : "#ffffff"}
              strokeWidth={isHighlight ? 2 : 1}
              rx={2}
            />
            {showLabel && (
              <text
                x={w / 2}
                y={showValue ? h / 2 - 4 : h / 2 + 4}
                textAnchor="middle"
                fontSize={Math.min(14, w / 7)}
                fill={isHighlight ? "#1a1a1a" : "#ffffff"}
                fontWeight={isHighlight ? 700 : 500}
                fontFamily="Montserrat, sans-serif"
              >
                {node.data.name}
              </text>
            )}
            {showValue && (
              <text
                x={w / 2}
                y={h / 2 + 14}
                textAnchor="middle"
                fontSize={11}
                fill={isHighlight ? "#1a1a1a" : "#ffffff"}
                fontFamily="Montserrat, sans-serif"
                opacity={0.85}
              >
                {node.data.value}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
