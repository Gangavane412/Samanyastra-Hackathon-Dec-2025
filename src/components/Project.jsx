import React from "react";
import ProjectCard from "./ProjectCard";
import "../assets copy/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const projectData = [
  {
    title: "Photography Website",
    viewLink: "https://gleeful-kheer-17c7ac.netlify.app/",
    codeLink: "https://gleeful-kheer-17c7ac.netlify.app/",
  },
  {
    title: "Websums Company",
    viewLink: "https://websumssoft.in/",
    codeLink: "https://websumssoft.in/",
  },
  {
    title: "College Management System",
    viewLink: "https://belhekargroupofinstitute.in/",
    codeLink: "https://belhekargroupofinstitute.in/",
  },
  {
    title: "Animation Website",
    viewLink: "https://loquacious-conkies-e504bb.netlify.app/",
    codeLink: "https://loquacious-conkies-e504bb.netlify.app/",
  },
  {
    title: "3D Animation",
    viewLink: "https://loquacious-sherbet-2e884d.netlify.app/",
    codeLink: "https://loquacious-sherbet-2e884d.netlify.app/",
  },
  {
    title: "Moving Animation",
    viewLink: "https://loquacious-conkies-e504bb.netlify.app/",
    codeLink: "https://loquacious-conkies-e504bb.netlify.app/",
  },
];

function Project() {
  return (
    <section className="project-section" id="project">
      <h2 className="heading">
        <i className="fas fa-briefcase" /> Projects
      </h2>
      <div className="custom-timeline">
        {projectData.map((project, index) => {
          const layoutClass =
            index === 0 || index === 2 || index === 4|| index === 6 ? "left-block" : "right-block";
          return (
            <div key={index} className={`timeline-item ${layoutClass}`}>
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    
    </section>
  );
}

export default Project;
