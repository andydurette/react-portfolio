import React,{useContext} from 'react';
import { AppContext } from './AppContext';

const ExpertiseList = () => {

  const {expertise} = useContext(AppContext);
  const [expertises/*, setExperiences*/] = expertise;

  return(
    <section id="expertise">
      <div id="expertise-grid">
      <h2>EXPERTISE</h2>
      {expertises.map(expertise => (
      <div key={expertise.id} className="expertise-piece">
        <div>{/* Icon to go here */}</div>
        <h4>{expertise.heading}</h4>
        <p>{expertise.copy}</p>
        <p className="skillset-heading">SKILLSET</p>
        <div className="expertise-icons">
          {expertise.skills.map(skill => (
            <img key={skill[0]} src={skill[1]} alt={skill[2]}/>
          ))}
        </div>
         
      </div>
      ))}
      </div>
    </section>
  );
}

export default ExpertiseList