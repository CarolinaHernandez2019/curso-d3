import { useState } from "react";
import BarChart from "../charts/BarChart";
import Lollipop from "../charts/Lollipop";
import { cohortData } from "../data/cohortData";
import { t } from "../i18n/translations";

const sortedData = [...cohortData].sort((a, b) => b.students - a.students);
const totalStudents = cohortData.reduce((sum, d) => sum + d.students, 0);
const totalCountries = cohortData.length;

export default function IntroProject({ lang }) {
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="lesson-content">
      <h2>{t("p1.title", lang)}</h2>
      <p className="lesson-subtitle">
        {t("p1.subtitle.pre", lang)}{totalStudents}{t("p1.subtitle.mid", lang)}{totalCountries}{t("p1.subtitle.end", lang)}
      </p>

      {/* Toggle de tipo de gráfico */}
      <div className="viz-toggle">
        <button
          className={`toggle-btn ${chartType === "bar" ? "toggle-active" : ""}`}
          onClick={() => setChartType("bar")}
        >
          Bar
        </button>
        <button
          className={`toggle-btn ${chartType === "lollipop" ? "toggle-active" : ""}`}
          onClick={() => setChartType("lollipop")}
        >
          Lollipop
        </button>
      </div>

      <div className="viz-container">
        {chartType === "bar" && <BarChart data={sortedData} lang={lang} />}
        {chartType === "lollipop" && <Lollipop data={sortedData} lang={lang} />}
      </div>
    </div>
  );
}
