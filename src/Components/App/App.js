import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import IntroBackground2 from '../IntroBackground/IntroBackground2.js';
import IntroCard from '../IntroCard/IntroCard.js';
import './App.css';

//This component is the container for the rest of the app
const App = (props) => {
    return (
        <div className="app">
            <Navbar className="app__navBar"/>
            <IntroBackground2 class="app__introBackground2" 
                              bgColor="#202030"
                              />
            <IntroCard />
        </div>
    );
}

export default App;
