import React from 'react';
import {AppProvider} from './components/AppContext';
import Home from './components/Home'
import ExpertiseList from './components/ExpertiseList';
import PortfolioList from './components/PortfolioList';

function App() {
  return (
    <AppProvider> 
      <div className="App">
        <Home />
        <ExpertiseList />
        <PortfolioList />
      </div>
    </AppProvider>
  );
}

export default App;
