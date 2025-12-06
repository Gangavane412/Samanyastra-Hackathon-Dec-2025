import React from 'react'

function About() {
  return (
   <section className="about" id="about">
  <h2 className="heading">
    <i className="fas fa-user-alt" /> About <span>Me</span>
  </h2>
  <div className="row">
    <div className="image">
      <img
        draggable="false"
        className="tilt"
        src="src\assets copy\images\image.jpg"
        alt=""
      />
    </div>
    <div className="content">
      <h3>I'm Priyanka</h3>
      <span className="tag">Web Developer</span>
      <p>
        I am a Web developer based in shevagaon, India. I am an Bachelor of
        Computer Science from SPPU. I am very passionate about improving my
        coding skills &amp; developing applications &amp; websites. I build
        WebApps and Websites using MERN Stack. Working for myself to improve my
        skills. Love to build Full-Stack clones.{" "}
      </p>
      <div className="box-container">
        {/* <div class="box">
        <p><span> age: </span> 20</p>
        <p><span> phone : </span> +91 XXX-XXX-XXXX</p>
      </div> */}
        <div className="box">
          <p>
            <span> email : </span> gangawanepriyanka412@gmail.com
          </p>
          <p>
            <span> place : </span> shevagaon, India - 412206
          </p>
        </div>
      </div>
      <div className="resumebtn">
        <a href="src\components\Mydocument\Priyanka.pdf" target="_blank" className="btn">
          <span>Resume</span>
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default About