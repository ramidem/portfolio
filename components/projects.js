import { projects } from "../lib/data.js";

export default function Projects() {
  return (
    <div className="container sections" id="projects-section">
      <div className="lg-column">
        <h3 className="section-title center">Featured Projects</h3>
        <div className="projects">
          {projects.map((project, i) => {
            return (
              <div className="project-item" key={i}>
                <img
                  src={`/images/${project.image}`}
                  alt={project.description}
                />

                <div className="project-item-description">
                  <h3>{project.name}</h3>
                  <p className="tech">{project.tech.join(", ")}</p>
                  <p className="description">{project.description}</p>

                  <a
                    href={project.repo}
                    className="btn btn-dark btn-dark-outline"
                    target="_blank"
                  >
                    Github <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href={project.link}
                    className="btn btn-dark"
                    target="_blank"
                  >
                    Visit site <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
