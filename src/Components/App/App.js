import React from 'react';
import IntroCard from '../IntroCard/IntroCard.js';
import IntroBackground from '../IntroBackground/IntroBackground.js';
import SizeModal from '../SizeModal/SizeModal.js';
import './App.css';

const App = (props) => {

  const body = (
     <div className="app">
        <div className="largeScreen">
           <IntroCard></IntroCard>
        </div>
     </div>
  );

  if (window.innerWidth < 768) 
  {
    return (
      <div>
        <SizeModal></SizeModal>
        <div>{body}</div>
      </div>
    )    
  }

  return (
    <div>{body}</div>
  );
}

export default App;
