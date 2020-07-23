import React,{useContext} from 'react';
import { AppContext } from '../utils/AppContext';
import PortfolioFilter from './PortfolioFilter';
import Fade from "./Fade";

const PortfolioList = () => {

// eslint-disable-next-line
const {portfolioState,portShow1,portShow2,portShow3,portShow4,portShow5,portShow6,portShow7, portShow8,portShow9, portShow10, portShow11} = useContext(AppContext);

const portArray = [portShow1[0],portShow2[0],portShow3[0],portShow4[0],portShow5[0],portShow6[0],portShow7[0], portShow8[0],portShow9[0], portShow10[0], portShow11[0]]

  return(
    <section id="portfolio">
      <div id="portfolio-grid">
      <h2>PORTFOLIO</h2>

      <PortfolioFilter/>
      {portfolioState[0].map(portfolio => (
        <Fade show={portArray[portfolio.id - 1]}  key={portfolio.id} className={`portfolio-piece`}>
      
        <div>
          <img src={portfolio.imageUrl} alt={portfolio.altText} loading="lazy"/>
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