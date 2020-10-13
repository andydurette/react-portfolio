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
  const [inMobile, setinMobile] = useState(true);
  const [portfolioFilter, setPortfolioFilter] = useState("ALL");
  const [portfolioOpacity, setPortfolioOpacity] = useState("ALL");
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(true);
  const [show8, setShow8] = useState(true);
  const [show9, setShow9] = useState(true);
  const [show10, setShow10] = useState(true);
  const [show11, setShow11] = useState(true);

  return(
    <AppContext.Provider value={{ 
      portfolioState: [portfolio, setPortfolio],
      expertiseState: [expertise, setExperience], 
      mobileNav: [mobileNav, setMobileNav], 
      scroll: [scroll, setScroll],
      navActive: [active, setActive],
      navInMobile: [inMobile, setinMobile],
      portfolioFilterState: [portfolioFilter, setPortfolioFilter],
      portfolioOpacityState: [portfolioOpacity, setPortfolioOpacity],
      portShow1: [show1, setShow1],
      portShow2: [show2, setShow2],
      portShow3: [show3, setShow3],
      portShow4: [show4, setShow4],
      portShow5: [show5, setShow5],
      portShow6: [show6, setShow6],
      portShow7: [show7, setShow7],
      portShow8: [show8, setShow8],
      portShow9: [show9, setShow9],
      portShow10: [show10, setShow10],
      portShow11: [show11, setShow11],
       }}>
      {props.children}
    </AppContext.Provider>
  );
}
