import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return(
    <section id="contact">
      <div id="contact-grid">
        <h2>CONTACT ME</h2>
        <h4 className="section-heading">Let's build something great together!</h4>
        <p>Ways to reach me are listed below, I have also left links to my professional profiles and social media. Feel free to look through them if you want to gain an idea of who I am in my professional and personal life.</p>
        <div className="contact-item">
          <img src="/content/img/logos/phone.svg" alt="phone" width="25px" height="25px" />
          <p>647-607-7597</p>
        </div>
        <div className="contact-item">
          <img src="/content/img/logos/email.svg" alt="email" width="25px" height="25px"/>
          <p>andy@andydurette.com</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact