import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return(
    <section id="contact">
      <div id="contact-grid">
        <h2>CONTACT ME</h2>
        <h4 className="section-heading">Together let's whip up something great!</h4>
        
        <div className="contact-item">
          <div>
            <img src="content/img/social-icons/mixer.svg" alt="Mixer" width="200px" height="200px" />
          </div>
          <div id="contact-info">
            <p>Feel free to look through my professional profiles and social media links below. Please contact me if you enjoy my work and feel I would be an asset to your team or an ideal candidate to work on your next project.</p>
            <div className="contact-item">
              <img src="content/img/logos/phone.svg" alt="phone" width="25px" height="25px" />
              <p>647-607-7597</p>
            </div>
            <div className="contact-item">
              <img src="content/img/logos/email.svg" alt="email" width="25px" height="25px"/>
              <p>andy@andydurette.com</p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </section>
  );
}

export default Contact