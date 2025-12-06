import React from "react";

function ProjectCard({ title, viewLink, codeLink }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className="card-links">
        <a href={viewLink} target="_blank" rel="noopener noreferrer">View</a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </div>
  );
}

export default ProjectCard;
