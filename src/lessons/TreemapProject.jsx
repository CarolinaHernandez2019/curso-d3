import Treemap from "../charts/Treemap";
import { cohortData, continentColors } from "../data/cohortData";
import { t } from "../i18n/translations";

const sortedData = [...cohortData].sort((a, b) => b.students - a.students);

const continents = Object.entries(
  cohortData.reduce((acc, d) => {
    acc[d.continent] = (acc[d.continent] || 0) + d.students;
    return acc;
  }, {})
).sort((a, b) => b[1] - a[1]);

export default function TreemapProject({ lang }) {
  return (
    <div className="lesson-content">
      <h2>{t("p2.title", lang)}</h2>
      <p className="lesson-subtitle">{t("p2.subtitle", lang)}</p>

      <div className="continent-legend" aria-label={t("p2.legend", lang)}>
        {continents.map(([continent, students]) => (
          <div className="legend-item" key={continent}>
            <span
              className="legend-dot"
              style={{ background: continentColors[continent] }}
              aria-hidden="true"
            />
            <span>{t(`continent.${continent}`, lang)} · {students}</span>
          </div>
        ))}
      </div>

      <div className="viz-container">
        <Treemap data={sortedData} lang={lang} />
      </div>
    </div>
  );
}
