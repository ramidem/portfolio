import { projects } from "../lib/data.js";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSlider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    mobileFirst: true,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, i) => {
        return (
          <div className="project-item" key={i}>
            <img src={`/images/${project.image}`} alt={project.description} />

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
              <a href={project.link} className="btn btn-dark" target="_blank">
                Visit site <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
