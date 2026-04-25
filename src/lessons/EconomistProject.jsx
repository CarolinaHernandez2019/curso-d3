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

      <section className="economist-notes">
        <h3>{t("p2.tips.title", lang)}</h3>
        <ul className="tips-list">
          <li>{t("p2.tip1", lang)}</li>
          <li>{t("p2.tip2", lang)}</li>
          <li>{t("p2.tip3", lang)}</li>
          <li>{t("p2.tip4", lang)}</li>
          <li>{t("p2.tip5", lang)}</li>
          <li>{t("p2.tip6", lang)}</li>
        </ul>
      </section>
    </div>
  );
}
