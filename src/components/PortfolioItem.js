import React,{useContext, useEffect, useState} from 'react';
import { AppContext } from '../utils/AppContext';
import Fade from "./util/Fade";


const PortfolioItem = (props) => {

  const {portfolioFilterState} = useContext(AppContext);
  const { portfolio, portfolioFilter, mounted } = props;
  const [showView, setShowView] = useState(false);
  
  useEffect(() => {
    if(mounted) {
      setShowView(false);
      setTimeout(function(){setShowView(portfolio.tags.includes(portfolioFilter) !== false || portfolioFilter === "ALL")}, 400);
    } else {
      setShowView(false);
    }
  }, [portfolioFilterState, portfolioFilter, portfolio.tags, mounted]);

return(
  <Fade show={showView} className={`portfolio-piece`}>
    <div >
      <img src={portfolio.imageUrl} alt={portfolio.altText}/>
      </div>
      <h3>{portfolio.name}</h3>
      <p>{portfolio.description}</p>
      <div className="portfolio-links">
      {portfolio.siteUrl !== ('') && 
        <a className="btn" href={portfolio.siteUrl} target="_blank" rel="noopener noreferrer" aria-label={portfolio.siteAria}>VIEW SITE</a> 
      }   
      {portfolio.repoUrl !== ('') &&
        <a className="btn" href={portfolio.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={portfolio.repoAria}>VIEW REPO</a>
      } 
    </div>
  </Fade>
 );
}

export default PortfolioItem;