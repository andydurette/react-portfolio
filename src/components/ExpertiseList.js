import React,{useContext, useEffect, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import { AppContext } from '../utils/AppContext';
import IsElementXPercentInViewport from '../utils/IsElementXPercentInViewport';
//import * as easings from 'd3-ease'


const ExpertiseList = () => {

  const {expertiseState} = useContext(AppContext);

// eslint-disable-next-line

  const [isToggledOpacity, setToggledOpacity] = useState(false);
  const [isToggledMarginBottom, setToggledMarginBottom] = useState(false);
  const [isToggledMarginTop, setToggledMarginTop] = useState(false);

  let springValue = { opacity: isToggledOpacity ? 1 : 0, marginBottom: isToggledMarginBottom ? 0 : -200, marginTop: isToggledMarginTop ? 0 : 200, delay: 0}

  const fade1 = useSpring({ ...springValue});
  const fade2 = useSpring({ ...springValue, delay: 75 });
  const fade3 = useSpring({ ...springValue, delay: 150 });
  const fade4 = useSpring({ ...springValue, delay: 300, });
  const fade5 = useSpring({ ...springValue, delay: 350, });
  const fade6 = useSpring({ ...springValue, delay: 425, });
  const fade7 = useSpring({ ...springValue, delay: 500, });
  const fade8 = useSpring({ ...springValue, delay: 575, });
  const fade9 = useSpring({ ...springValue, delay: 650, });
  const fade10 = useSpring({ ...springValue, delay: 725, });
  const fade11 = useSpring({ ...springValue, delay: 800, });
  const fade12 = useSpring({ ...springValue, delay: 875, });
  const fade13 = useSpring({ ...springValue, delay: 1000, });
  const fade14 = useSpring({ ...springValue, delay: 1075, });
  const fade15 = useSpring({ ...springValue, delay: 1150, });
  const fade16 = useSpring({ ...springValue, delay: 1225, });

  let fadeValue = 0;
  let fadeArray = [fade1,fade2,fade3,fade4,fade5,fade6,fade7,fade8,fade9,fade10,fade11,fade12,fade13,fade14,fade15,fade16];

let ExpertiseAnimation = () => {
  document.addEventListener("scroll", () => {
    // Checks which nav element should be active
    if( IsElementXPercentInViewport(document.querySelector("#expertise"), 50) === true){
      setToggledMarginBottom(!isToggledMarginBottom);
      setToggledMarginTop(!isToggledMarginTop);
      setToggledOpacity(!isToggledOpacity);
    }
  })
}

useEffect(() => {
  // Add event Listener for animation events
  ExpertiseAnimation();

  // eslint-disable-next-line
}, []);

  return(
    <section id="expertise">
      <div id="expertise-grid">
      <h2>EXPERTISE</h2>
      {expertiseState[0].map(expertise => (
      <div key={expertise.id} className="expertise-piece" >
        <div><img src={expertise.icon} alt={expertise.alt} width="50px" height="50px" loading="lazy"/></div>
        <h3>{expertise.heading}</h3>
        <p>{expertise.copy}</p>
        <p className="skillset-heading">SKILL SET</p>
        <div className="expertise-icons">
          {expertise.skills.map((skill,index) => (
            
            <div  className="tooltip" key={index} >
            <animated.img style={fadeArray[fadeValue]} fadevalue={fadeValue = fadeValue + 1}  key={skill[0]} src={skill[1]} alt={skill[2]} loading="lazy"/>
            <span className="tooltiptext">{skill[2]}</span>
            </div>
          ))}
        </div>
      </div>
      ))}
      </div>
    </section>
  );
}

export default ExpertiseList