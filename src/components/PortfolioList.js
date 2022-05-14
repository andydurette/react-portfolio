import React,{useContext, useState, useEffect} from 'react';
import { AppContext } from '../utils/AppContext';
import PortfolioItem from './PortfolioItem';
import IsElementXPercentInViewport from '../utils/IsElementXPercentInViewport';

const PortfolioList = () => {
  const {portfolioState} = useContext(AppContext);
  const [portfolioFilter, setPortfolioFilter] = useState('ALL'); 
  const [mounted, setMounted] = useState(false);

  let PortfolioAnimation = () => {
    document.addEventListener("scroll", () => {
      // Checks which nav element should be active
      if( IsElementXPercentInViewport(document.querySelector("#portfolio"), 10) === true){
        setMounted(true);
      }
    })
  }

  useEffect(() => {
    PortfolioAnimation();
  }, []);

  return(
    <section id="portfolio">
      <div id="portfolio-grid">
      <h2>PORTFOLIO</h2>
      <div id="portfolio-filter">
      <div>
        <label htmlFor="portfolio-filter-select">FILTER BY:</label>
        <select id="portfolio-filter-select" name="portfolio-filter-select" 
        onChange={(e) => {
          let filterInput = e.target.value.toUpperCase();
          setPortfolioFilter(filterInput);
        }} >
          <option value="all">All</option>
          <option value="front end">Front End</option>
          <option value="back end">Back End</option>
          <option value="full stack">Full Stack</option>
          <option value="react">React</option>
          <option value="node">Node</option>
          <option value="typescript">TypeScript</option>
          <option value="graphql">GraphQL</option>
          <option value="redux toolkit">Redux Toolkit</option>
          <option value="aws appsync">AWS AppSync</option>
          <option value="aws cdk">AWS CDK</option>
          <option value="mongodb">Mongodb</option>
          <option value="mysql">Mysql</option>
          <option value="dynamodb">DynamoDB</option>
          <option value="firebase">Firebase</option>
          
        </select>
      </div>
    </div>
      {portfolioState[0].map(portfolio => (
       <PortfolioItem portfolio={portfolio} portfolioFilter={portfolioFilter} mounted={mounted}/>
      ))}
      </div>
    </section>
  );
}

export default PortfolioList