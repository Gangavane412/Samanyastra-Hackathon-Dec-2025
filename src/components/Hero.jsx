import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegramPlane, faDev } from '@fortawesome/free-brands-svg-icons';





function Hero() {
  return (
   <section className="home " id="home">
    <div className="snowflakes" aria-hidden="true">
  {[...Array(30)].map((_, i) => (
    <span key={i} className="snowflake">❆</span>
  ))}
</div>

  <div id="particles-js" />
  <div className="content">
    <h2>
      Hi There,
      <br /> I'm Priyanka <span>Gangavane</span>
    </h2>
   
    <a href="#about" className="btn">
      <span>About Me</span>
      <i className="fas fa-arrow-circle-down" />
    </a>
    <div className="socials">
      <ul className="social-icons">
        <li>
          <a
            className="linkedin"
            aria-label="LinkedIn"
            href="https://linkedin.com/in/priyanka-gangawane-1a3158272 "
            target="_blank"
          >
          




             <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            className="github"
            aria-label="GitHub"
            href="https://github.com/Gangavane412 "
            target="_blank"
          >
           <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            className="telegram"
            aria-label="Telegram"
            href="#"
            target="_blank"
          >
          <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
        </li>
        <li>
          <a
            className="dev"
            aria-label="Dev"
            href="Mydocument\Priyanka.pdf"
            target="_blank"
          >
          <FontAwesomeIcon icon={faDev} />
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="image">
  
    <img
      draggable="false"
      className="tilt"
      src="src\assets copy\images\photo.jpg"
      alt=""
    />
  </div>
</section>

  )
}

export default Hero