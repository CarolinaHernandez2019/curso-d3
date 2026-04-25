import { t } from "../i18n/translations";

export default function Home({ lang }) {
  return (
    <div className="lesson-content">
      <h2>{t("home.title", lang)}</h2>
      <p className="lesson-subtitle">
        <a href="https://carolinahernandez2019.github.io/" target="_blank" rel="noopener" className="highlight-link">Carolina Hernández</a>
        {t("home.subtitle.middle", lang)}
        <a href="https://www.react-graph-gallery.com/react-d3-dataviz-course" target="_blank" rel="noopener" className="highlight-link">D3 y React con Yan Holtz</a>
      </p>

      <section className="home-section">
        <p>{t("home.description", lang)}</p>
        <p className="home-note">{t("home.note", lang)}</p>
      </section>

      <section className="home-section">
        <p><strong>{t("home.tips", lang)}</strong></p>
        <ul className="tips-list">
          <li>{t("home.tip1", lang)}</li>
          <li>{t("home.tip2", lang)}</li>
          <li>{t("home.tip3", lang)}</li>
          <li>{t("home.tip4", lang)}{" "}
            <code>d3.select</code>, <code>d3.append</code>{" "}
            {t("home.tip4.end", lang)}
          </li>
        </ul>
      </section>
    </div>
  );
}
