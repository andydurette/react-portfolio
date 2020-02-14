import React, {useState, createContext} from 'react';
import {portfolioData} from '../json/portfolioData.js';
import {expertiseData} from '../json/expertiseData.js';

export const AppContext = createContext();

export const AppProvider = props => {
  const [portfolio, setPortfolio] = useState(portfolioData);
  const [expertise, setExperience] = useState(expertiseData);

  return(
    <AppContext.Provider value={{ portfolio: [portfolio, setPortfolio], expertise: [expertise, setExperience] }}>
      {props.children}
    </AppContext.Provider>
  );
}
