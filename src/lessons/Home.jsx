import { t } from "../i18n/translations";

export default function Home({ lang }) {
  return (
    <div className="lesson-content">
      <h2>{t("home.title", lang)}</h2>
      <p className="lesson-subtitle">
        <a href="https://carolinahernandez2019.github.io/" target="_blank" rel="noopener" className="highlight-link">Carolina Hernández</a>
        {t("home.subtitle.middle", lang)}
        <a href="https://www.react-graph-gallery.com/react-d3-dataviz-course" target="_blank" rel="noopener" className="highlight-link">{t("home.course.link", lang)}</a>
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
          <li>{t("home.tip4", lang)}</li>
        </ul>
        <p className="home-note">{t("home.domNote", lang)}</p>
      </section>

      <section className="home-section folder-section">
        <p><strong>{t("home.structure.subtitle", lang)}</strong></p>

        <div className="folder-tree" aria-label={t("home.structure.subtitle", lang)}>
          <p><code>src/</code><span>{t("home.structure.src", lang)}</span></p>
          <p><code>viz/</code><span>{t("home.structure.viz", lang)}</span></p>
          <p><code>components/</code><span>{t("home.structure.components", lang)}</span></p>
          <p><code>pages/</code><span>{t("home.structure.pages", lang)}</span></p>
          <p><code>ui/</code><span>{t("home.structure.ui", lang)}</span></p>
        </div>

        <ul className="yan-tips-list">
          <li>{t("home.yanTip1.body", lang)}</li>
          <li>{t("home.yanTip2.body", lang)}</li>
          <li>{t("home.yanTip3.body", lang)}</li>
          <li>{t("home.yanTip4.body", lang)}</li>
        </ul>
      </section>
    </div>
  );
}
