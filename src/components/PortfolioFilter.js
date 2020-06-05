import React,{useContext} from 'react';
import { AppContext } from '../utils/AppContext';
import { portfolioData } from '../json/portfolioData';

const PortfolioFilter = () => {

  const {portfolioState} = useContext(AppContext);
  
  // eslint-disable-next-line
  let [portfolio, setPortfolio] = portfolioState; 

  const datafilter = (e) => {
    // Grab value of input
    let filterInput = e.target.value.toUpperCase();

    // Send array through the .some method first to return strings of matching values to .include()
    // This way it's comparing string values and not the full array objects value and will accept partial values
    // Example: HTM instead of HTML
     
    let tagCheck = portfolioData.filter((portfolio) => {
      return portfolio.tags.some((tags) => { 
        return tags.includes(filterInput)
      });
    });

    setPortfolio(portfolio = tagCheck);
  } 

  return (
    <div id="portfolio-filter">
      <div>
        <label htmlFor="portfolio-filter-input">FILTER BY SKILLSET:</label>
        <input
          id="portfolio-filter-input" name="portfolio-filter-input"
          placeholder="Example React" 
          onChange={(e) => datafilter(e)} 
        />
      </div>
    </div>
  )
}

export default PortfolioFilter;




