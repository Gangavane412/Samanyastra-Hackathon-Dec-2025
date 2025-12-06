import React from 'react'

function Experience() {
  return (
   
      <section className="experience-section" id="experience">
        <h2 className="heading">
          <i className="fas fa-briefcase" /> Experience
        </h2>
        <div className="timeline">
          {/* Experience Items */}
          {[
            {
              company: "JCS",
              position: "Web Developer",
              period: "June 2024 - August 2024"
            },
            {
              company: "Samanyastra",
              position: "Intern",
              period: "February 2025 - April 2025"
            }
          ].map((exp, index) => (
            <div key={index} className={`container ${index % 2 === 0 ? 'right' : 'left'}`}>
              <div className="content">
                <div className="tag">
                  <h2>{exp.company}</h2>
                </div>
                <div className="desc">
                  <h3>{exp.position}</h3>
                  <p>{exp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </section>
  )
}

export default Experience
