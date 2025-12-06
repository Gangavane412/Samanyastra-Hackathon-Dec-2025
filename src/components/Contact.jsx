import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading" style={{ color: "white" }}>
        <i className="fas fa-headset" /> Get in <span>Touch</span>
      </h2>

      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src="src\assets copy\images\My_image.jpg" alt="Contact" />
          </div>

          <form id="contact-form">
            <div className="form-group">
              <div className="field">
                <input type="text" name="name" placeholder="Name" required />
                <i className="fas fa-user" />
              </div>

              <div className="field">
                <input type="email" name="email" placeholder="Email" required />
                <i className="fas fa-envelope" />
              </div>

              <div className="field">
                <input type="text" name="phone" placeholder="Phone" required />
                <i className="fas fa-phone-alt" />
              </div>

              <div className="message">
                <textarea name="message" placeholder="Message" required></textarea>
                <i className="fas fa-comment-dots" />
              </div>
            </div>

            <div className="button-area">
              <button type="submit">
                Submit <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
