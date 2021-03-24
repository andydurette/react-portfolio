import React,{useEffect, useState} from 'react';
import IsElementXPercentInViewport from '../utils/IsElementXPercentInViewport';
import {useSpring, animated} from 'react-spring';
import { useMediaQuery } from 'react-responsive'
import andyDuretteC from '../img/andyDuretteC.jpg'; // Tell webpack this JS file uses this image
import andyDuretteMobileC from '../img/andyDuretteMobileC.jpg'; // Tell webpack this JS file uses this image
import * as easings from 'd3-ease';

const Home = () => {

  const [isToggledOpacity, setToggledOpacity] = useState(false);

  let HomeAnimation = () => {
    document.addEventListener("scroll", () => {
      // Checks which nav element should be active
      if( IsElementXPercentInViewport(document.querySelector("#home"), 10) === true){
        setToggledOpacity(!isToggledOpacity);
      }
    })
  }

  const fade1 = useSpring({
    opacity: isToggledOpacity ? 1 : 0,
    delay: 0,
    config: { duration: 1000, easing: easings.easeCubic }
  });

  const fade2 = useSpring({
    opacity: isToggledOpacity ? 1 : 0,
    delay: 0,
    config: { duration: 1000, easing: easings.easeCubic }
  });

  useEffect(() => {
    // Add event Listener for animation events
    HomeAnimation();

    if( IsElementXPercentInViewport(document.querySelector("#home"), 10) === true){
      setToggledOpacity(!isToggledOpacity);
    }
    // eslint-disable-next-line
  }, []);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 901px)'
  })

  //console.log(isDesktopOrLaptop)
  return(
    <React.Fragment>
    {(isDesktopOrLaptop) ? 
      <animated.section id="home" style={{backgroundImage: `url(./${andyDuretteC})`}}>
      <div className="center-container">
        <div className="intro-container">
          <div className="intro-text">
            <animated.div style={fade1} className="intro-heading">I'm Andy</animated.div>
            <animated.div style={fade2} className="intro-lead-in">A React &amp; Node JS Full Stack Developer</animated.div>
            </div>
        </div>
      </div>
    </animated.section>
    :  
    <section id="home" style={{backgroundImage: `url(./${andyDuretteMobileC})`}}>
    <div className="center-container">
      <div className="intro-container">
        <div className="intro-text">
          <animated.div style={fade1} className="intro-heading">I'm Andy</animated.div>
          <animated.div style={fade2} className="intro-lead-in">A React &amp; Node JS Full Stack Developer</animated.div>
          </div>
      </div>
    </div>
  </section>}
   
    </React.Fragment>
  );
}

export default Home