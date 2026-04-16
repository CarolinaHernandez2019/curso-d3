import { t } from "../i18n/translations";

export default function Home({ lang }) {
  return (
    <div className="lesson-content">
      <h2>{t("home.title", lang)}</h2>
      <p className="lesson-subtitle">
        <a href="https://carolinahernandez2019.github.io/" target="_blank" rel="noopener" className="highlight-link">Carolina Hernández</a>
        {t("home.subtitle.after", lang)}
      </p>

      <section className="home-section">
        <p>{t("home.description", lang)}</p>
        <p className="home-note">{t("home.note", lang)}</p>
      </section>

      <section className="home-section">
        <p><strong>{t("home.tips", lang)}</strong></p>
        <ul className="tips-list">
          <li>{t("home.tip1", lang)}</li>
          <li>{t("home.tip2", lang)}{" "}
            <code>d3.select</code>, <code>d3.append</code>{" "}
            {t("home.tip2.end", lang)}
          </li>
        </ul>
      </section>
    </div>
  );
}
