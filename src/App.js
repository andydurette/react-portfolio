import React from 'react';
import {AppProvider} from './components/AppContext';
import Nav from './components/Nav'
import Home from './components/Home'
import ExpertiseList from './components/ExpertiseList';
import PortfolioList from './components/PortfolioList';
import Contact from './components/Contact';


function App() {
  return (
    <AppProvider> 
      <div className="App">
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
