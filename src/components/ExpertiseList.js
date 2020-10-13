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
  const fade4 = useSpring({ ...springValue, delay: 225, });
  const fade5 = useSpring({ ...springValue, delay: 300, });
  const fade6 = useSpring({ ...springValue, delay: 450, });
  const fade7 = useSpring({ ...springValue, delay: 525, });
  const fade8 = useSpring({ ...springValue, delay: 600, });
  const fade9 = useSpring({ ...springValue, delay: 675, });
  const fade10 = useSpring({ ...springValue, delay: 750, });
  const fade11 = useSpring({ ...springValue, delay: 825, });
  const fade12 = useSpring({ ...springValue, delay: 900, });
  const fade13 = useSpring({ ...springValue, delay: 1025, });
  const fade14 = useSpring({ ...springValue, delay: 1100, });
  const fade15 = useSpring({ ...springValue, delay: 1175, });
  const fade16 = useSpring({ ...springValue, delay: 1325, });
  const fade17 = useSpring({ ...springValue, delay: 1400, });
  const fade18 = useSpring({ ...springValue, delay: 1475, });
  const fade19 = useSpring({ ...springValue, delay: 1550, });

  let fadeValue = 0;
  let fadeArray = [fade1,fade2,fade3,fade4,fade5,fade6,fade7,fade8,fade9,fade10,fade11,fade12,fade13,fade14,fade15,fade16,fade17,fade18,fade19];

let ExpertiseAnimation = () => {
  document.addEventListener("scroll", () => {
    // Checks which nav element should be active
    if( IsElementXPercentInViewport(document.querySelector("#expertise"), 10) === true){
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