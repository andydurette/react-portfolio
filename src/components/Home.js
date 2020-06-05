import React from 'react';
import { useMediaQuery } from 'react-responsive'
import andyDuretteC from '../img/andyDuretteC.jpg'; // Tell webpack this JS file uses this image
import andyDuretteMobileC from '../img/andyDuretteMobileC.jpg'; // Tell webpack this JS file uses this image

const Home = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 901px)'
  })

  //console.log(isDesktopOrLaptop)
  return(



    <React.Fragment>
    {(isDesktopOrLaptop) ? 
      <section id="home" style={{backgroundImage: `url(${andyDuretteC})`}}>
      <div className="center-container">
        <div className="intro-container">
          <div className="intro-text">
            <div className="intro-heading">I'm Andy</div>
            <div className="intro-lead-in">A React &amp; Node JS Full Stack Developer</div>
            </div>
        </div>
      </div>
    </section>
    :  
    <section id="home" style={{backgroundImage: `url(${andyDuretteMobileC})`}}>
    <div className="center-container">
      <div className="intro-container">
        <div className="intro-text">
          <div className="intro-heading">I'm Andy</div>
          <div className="intro-lead-in">A React &amp; Node JS Full Stack Developer</div>
          </div>
      </div>
    </div>
  </section>}
   
    </React.Fragment>
  );
}

export default Home