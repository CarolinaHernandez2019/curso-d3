import { data } from "../data/gapminder";
import BubblePlot from "../viz/BubblePlot";

export default function GapminderProject() {
  return (
    <div className="lesson-content gapminder-project">
      <h2>GDP per capita vs life expectancy</h2>
      <p className="lesson-subtitle">
        A static Gapminder bubble plot with median reference lines and labelled countries.
      </p>

      <div className="viz-container gapminder-viz">
        <BubblePlot data={data} width={800} height={600} />
      </div>
    </div>
  );
}
