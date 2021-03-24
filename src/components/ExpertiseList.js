import React,{useContext} from 'react';
import { AppContext } from '../utils/AppContext';
import AnimateBlock from './AnimateBlock';

const ExpertiseList = () => {

  const {expertiseState} = useContext(AppContext);

  const delayCount = (i, index) => {
   let expertiseDelay = 0;
   
    for (let ind = 0; ind <= i; ind++) {
      expertiseDelay += (expertiseState[0][ind].skills.length * 75)
    }

    if(index !== 0){
      expertiseDelay += index * 75;
    }

    return expertiseDelay
  }

  return(
    <section id="expertise">
      <div id="expertise-grid">
      <h2>EXPERTISE</h2>
      {expertiseState[0].map((expertise, i) => (
      <div key={expertise.id} className="expertise-piece" >
        <div><img src={expertise.icon} alt={expertise.alt} width="50px" height="50px" loading="lazy"/></div>
        <h3>{expertise.heading}</h3>
        <p>{expertise.copy}</p>
        <p className="skillset-heading">SKILL SET</p>
        <div className="expertise-icons">
          {expertise.skills.map((skill, index) => (
            <div className="tooltip" key={index} >
              {/* {console.log('i', i)} */}
              {/* {console.log('index', index)} */}
              <AnimateBlock keyValue={index} fadeDelay={()=> delayCount(i, index)} skill={skill[0]} src={skill[1]} alt={skill[2]} toolTipText={skill[2]} />
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