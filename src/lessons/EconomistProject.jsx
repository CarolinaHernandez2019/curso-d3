import EconomistBarChart from "../charts/EconomistBarChart";
import { economistData } from "../data/economistData";
import { t } from "../i18n/translations";

export default function EconomistProject({ lang }) {
  return (
    <div className="lesson-content">
      <h2>{t("p2.title", lang)}</h2>
      <p className="lesson-subtitle">{t("p2.subtitle", lang)}</p>

      <div className="viz-container economist-viz">
        <EconomistBarChart data={economistData} />
      </div>
    </div>
  );
}
