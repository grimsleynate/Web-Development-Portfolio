import React from 'react';
import IntroCard from '../IntroCard/IntroCard.js';
import IntroBackground from '../IntroBackground/IntroBackground.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="largeScreen">
        <IntroBackground/>
        <IntroCard>
      
        </IntroCard>
      </div>
      <div className="notLargeScreen">
        <h1 style={{color: 'white', textAlign: 'center'}}>Your screen is too small!</h1>
      </div>
    </div>
  );
}

export default App;
