import ProjectsSlider from "./slider";

export default function Projects() {
  return (
    <div className="container sections" id="projects-section">
      <div className="lg-column">
        <h3 className="section-title center">Featured Projects</h3>

        <div className="projects">
          <ProjectsSlider />
        </div>
      </div>
    </div>
  );
}
