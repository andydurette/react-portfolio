import React from 'react';
import {AppProvider} from './components/AppContext';
import Nav from './components/Nav'
import Home from './components/Home'
import ExpertiseList from './components/ExpertiseList';
import PortfolioList from './components/PortfolioList';
import Contact from './components/Contact';

//Added for accessibility makes focus ring only when tabbing

let handleFirstTab = (e) =>{
  if (e.keyCode === 9) { // the "I am a keyboard user" key
      document.body.classList.add('user-is-tabbing');
      document.removeEventListener('keydown', handleFirstTab);
  }
}

document.addEventListener('keydown', handleFirstTab);


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
