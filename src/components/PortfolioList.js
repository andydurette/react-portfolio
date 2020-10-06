import React,{useContext,useEffect} from 'react';
import { AppContext } from '../utils/AppContext';
import PortfolioFilter from './PortfolioFilter';
import IsElementXPercentInViewport from '../utils/IsElementXPercentInViewport';
import Fade from "./Fade";

const PortfolioList = () => {

// eslint-disable-next-line
const {portfolioState,portShow1,portShow2,portShow3,portShow4,portShow5,portShow6,portShow7, portShow8,portShow9, portShow10, portShow11} = useContext(AppContext);

const portArray = [portShow1[0],portShow2[0],portShow3[0],portShow4[0],portShow5[0],portShow6[0],portShow7[0], portShow8[0],portShow9[0], portShow10[0], portShow11[0]];

// eslint-disable-next-line
let [show1, setShow1] = portShow1;
// eslint-disable-next-line
let [show2, setShow2] = portShow2;
// eslint-disable-next-line
let [show3, setShow3] = portShow3;
// eslint-disable-next-line
let [show4, setShow4] = portShow4;
// eslint-disable-next-line
let [show5, setShow5] = portShow5;
// eslint-disable-next-line
let [show6, setShow6] = portShow6;
// eslint-disable-next-line
let [show7, setShow7] = portShow7;
// eslint-disable-next-line
let [show8, setShow8] = portShow8;
// eslint-disable-next-line
let [show9, setShow9] = portShow9;

let openingAnimation = true;

let PortfolioAnimation = () => {
  document.addEventListener("scroll", () => {
    // Checks which nav element should be active
   
    if( IsElementXPercentInViewport(document.querySelector("#portfolio"), 10) === true && openingAnimation === true ){
      setTimeout(function(){
      setShow1(show1 = true);
      setShow2(show2 = true);
      setShow3(show3 = true);
      setShow4(show4 = true);
      setShow5(show5 = true);
      setShow6(show6 = true);
      setShow7(show7 = true);
      setShow8(show8 = true);
      setShow9(show9 = true);
      openingAnimation = false;
    }, 200);
    }
    
  })

  
}

useEffect(() => {
  // Add event Listener for animation events
  PortfolioAnimation();

  // eslint-disable-next-line
}, []);

  return(
    <section id="portfolio">
      <div id="portfolio-grid">
      <h2>PORTFOLIO</h2>

      <PortfolioFilter/>
      {portfolioState[0].map(portfolio => (
        <Fade show={portArray[portfolio.id - 1]}  key={portfolio.id} className={`portfolio-piece`}>
      
        <div>
          <img src={portfolio.imageUrl} alt={portfolio.altText}/>
        </div>
        <h3>{portfolio.name}</h3>
        <p>{portfolio.description}</p>
        <div className="portfolio-links">
          {portfolio.siteUrl !== ('') ? <a className="btn" href={portfolio.siteUrl} target="_blank" rel="noopener noreferrer" aria-label={portfolio.siteAria}>VIEW SITE</a> : ""}   
          <a className="btn" href={portfolio.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={portfolio.repoAria}>VIEW REPO</a>
        </div>

      </Fade>
      ))}
      </div>
    </section>
  );
}

export default PortfolioList