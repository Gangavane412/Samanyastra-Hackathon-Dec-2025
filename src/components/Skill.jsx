import React from 'react';

function Skill() {
  // Array of skills with their image paths and names
 const skills = [
    { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
   
    { name: 'C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  
  ];
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code" /> Skills &amp; <span>Abilities</span>
      </h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  style={{ width: '80px', height: '80px' }} 
                />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;