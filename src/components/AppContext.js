import React, {useState, createContext} from 'react';
import {portfolioData} from '../json/portfolioData.js';
import {expertiseData} from '../json/expertiseData.js';

export const AppContext = createContext();

export const AppProvider = props => {
  const [portfolio, setPortfolio] = useState(portfolioData);
  const [expertise, setExperience] = useState(expertiseData);
  const [mobileNav, setMobileNav] = useState(false);
  const [scroll, setScroll] = useState(false);


  return(
    <AppContext.Provider value={{ portfolio: [portfolio, setPortfolio], expertise: [expertise, setExperience], mobileNav: [mobileNav, setMobileNav], scroll: [scroll, setScroll] }}>
      {props.children}
    </AppContext.Provider>
  );
}
