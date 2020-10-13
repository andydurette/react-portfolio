import React from 'react';
import {AppProvider} from './utils/AppContext';
import Nav from './components/Nav'
import Home from './components/Home'
import ExpertiseList from './components/ExpertiseList';
import PortfolioList from './components/PortfolioList';
import Contact from './components/Contact';
//import 'focus-visible';

//Added for accessibility makes focus ring only when tabbing


function App() {
  return (
    <AppProvider> 
      {/* Add js-focus-visible to listen if someone uses keyboard focus to use website */}
      <div className="js-focus-visible">
        <Nav />
        <Home />
        <ExpertiseList />
        <PortfolioList />
        <Contact />
      </div>
    </AppProvider>
  );
}

export default App;