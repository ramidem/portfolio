import { name, title } from "../lib/data.js";
import Socials from "./socials";
import Bio from "./bio.js";

export default function About() {
  return (
    <div className="container">
      <div className="md-column">
        <div id="about">
          <div id="greet">
            <h2>{name.toUpperCase()}</h2>
            <p>{title}</p>
          </div>
          <img src="/images/med_aduh.jpg" alt={name} />

          <Socials />

          <div className="clearfix"></div>

          <Bio />
        </div>
      </div>
    </div>
  );
}
