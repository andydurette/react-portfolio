import React from 'react';
import {AppProvider} from './components/AppContext';
import ExpertiseList from './components/ExpertiseList';
import PortfolioList from './components/PortfolioList';

function App() {
  return (
    <AppProvider> 
      <div className="App">
        <ExpertiseList />
        <PortfolioList />
      </div>
    </AppProvider>
  );
}

export default App;
