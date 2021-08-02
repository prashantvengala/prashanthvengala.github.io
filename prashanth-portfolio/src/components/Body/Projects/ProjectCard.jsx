import React from "react";
import "./ProjectCard.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <p>{project.about}</p>

        <h3 style={{ color: "navy" }}>Tech Stack</h3>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" target="_blank" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                Live Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" target="_blank" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i> GitHub Source
              </div>
            </a>
          )}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
