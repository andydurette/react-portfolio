import React, {useState, createContext} from 'react';
import {portfolioData} from '../json/portfolioData.js';
import {expertiseData} from '../json/expertiseData.js';

export const AppContext = createContext();

export const AppProvider = props => {
  const [portfolio, setPortfolio] = useState(portfolioData);
  const [expertise, setExperience] = useState(expertiseData);
  const [mobileNav, setMobileNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("home");
  const [inMobile, setInMobile] = useState(true);
  const [portfolioOpacity, setPortfolioOpacity] = useState("ALL");

  return(
    <AppContext.Provider value={{ 
      portfolioState: [portfolio, setPortfolio],
      expertiseState: [expertise, setExperience], 
      mobileNav: [mobileNav, setMobileNav], 
      scroll: [scroll, setScroll],
      navActive: [active, setActive],
      navInMobile: [inMobile, setInMobile],
      portfolioOpacityState: [portfolioOpacity, setPortfolioOpacity],
       }}>
      {props.children}
    </AppContext.Provider>
  );
}
