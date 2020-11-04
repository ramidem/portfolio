import { featuredRepos } from "../lib/data.js";

export default function Repos() {
  return (
    <div className="container sections" id="repos-section">
      <div className="lg-column">
        <h3 className="section-title center">Featured Github Repos</h3>
        <ul id="stuff">
          {featuredRepos.map((repo, i) => {
            return (
              <li key={i}>
                <h5>
                  <a href={repo.link}>{repo.name}</a>
                </h5>
                <p>{repo.description}</p>
                <p className="stuff-tech">{repo.tech.join(", ")}</p>
              </li>
            );
          })}
        </ul>

        <a
          href="https://codepen.io/collection/DOgOYd?grid_type=grid"
          id="codepen"
          className="btn btn-dark btn-dark-outline"
        >
          More on codepen <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}
