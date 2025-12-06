import React from 'react'

function Footer() {
  return (
   <section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>Priyanka's Portfolio</h3>
      <p>
        Thank you for visiting my personal portfolio website. Connect with me
        over socials. <br /> <br /> Keep Rising 🚀. Connect with me over live
        chat!
      </p>
    </div>
    <div className="box">
      <h3>quick links</h3>
      <a href="#home">
        <i className="fas fa-chevron-circle-right" /> home
      </a>
      <a href="#about">
        <i className="fas fa-chevron-circle-right" /> about
      </a>
      <a href="#skills">
        <i className="fas fa-chevron-circle-right" /> skills
      </a>
      <a href="#education">
        <i className="fas fa-chevron-circle-right" /> education
      </a>
      <a href="#work">
        <i className="fas fa-chevron-circle-right" /> work
      </a>
      <a href="#experience">
        <i className="fas fa-chevron-circle-right" /> experience
      </a>
    </div>
    <div className="box">
      <h3>contact info</h3>
      <p>
        {" "}
        <i className="fas fa-phone" />
        +91 XXX-XXX-XXXX
      </p>
      <p>
        {" "}
        <i className="fas fa-envelope" />
        gangawanepriyanka412@gmail.com
      </p>
      <p>
        {" "}
        <i className="fas fa-map-marked-alt" />
        Shevagaon, India-412206
      </p>
      <div className="share">
        <a
          href="https://linkedin.com/in/priyanka-gangawane-1a3158272 "
          className="fab fa-linkedin"
          aria-label="LinkedIn"
          target="_blank"
        />
        <a
          href="https://github.com/Gangavane412 "
          className="fab fa-github"
          aria-label="GitHub"
          target="_blank"
        />
        <a
          href="mailto:gangawanepriyanka@gmail.com"
          className="fas fa-envelope"
          aria-label="Mail"
          target="_blank"
        />
      </div>
    </div>
  </div>
  <h1 className="credit">
    Designed with <i className="fa fa-heart pulse" /> by{" "}
    <a href="https://www.linkedin.com/in/jigar-sable"> Gangavane priyanka </a>
  </h1>
</section>

  )
}

export default Footer