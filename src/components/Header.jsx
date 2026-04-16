import { t } from "../i18n/translations";

const PROJECTS = [1, 2, 3, 4, 5];

export default function Header({ activeView, onSelect, lang, onToggleLang }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a
              href="#"
              className={activeView === "home" ? "active" : ""}
              onClick={(e) => { e.preventDefault(); onSelect("home"); }}
            >
              {t("nav.home", lang)}
            </a>
          </li>
          {PROJECTS.map((n) => (
            <li key={n}>
              <a
                href="#"
                className={activeView === `project-${n}` ? "active" : ""}
                onClick={(e) => { e.preventDefault(); onSelect(`project-${n}`); }}
              >
                {t("nav.project", lang)} {n}
              </a>
            </li>
          ))}
        </ul>
        <button className="lang-toggle" onClick={onToggleLang}>
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
}
