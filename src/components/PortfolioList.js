import React,{useContext} from 'react';
import { AppContext } from '../utils/AppContext';
import PortfolioFilter from './PortfolioFilter';

const PortfolioList = () => {

  const {portfolioState} = useContext(AppContext);

  return(
    <section id="portfolio">
      <div id="portfolio-grid">
      <h2>PORTFOLIO</h2>
      <PortfolioFilter/>
      {portfolioState[0].map(portfolio => (
      <div key={portfolio.id} className="portfolio-piece">
        <div><img src={portfolio.imageUrl} alt={portfolio.altText} loading="lazy"/></div>
        <h3>{portfolio.name}</h3>
        <p>{portfolio.description}</p>
        <div className="portfolio-links">
          {portfolio.siteUrl !== ('') ? <a className="btn" href={portfolio.siteUrl} target="_blank" rel="noopener noreferrer" aria-label={portfolio.siteAria}>VIEW SITE</a> : ""}   
          <a className="btn" href={portfolio.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={portfolio.repoAria}>VIEW REPO</a>
        </div>
      </div>
      ))}
      </div>
    </section>
  );
}

export default PortfolioList