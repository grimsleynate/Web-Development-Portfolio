import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import CardDemo from '../CardDemo/CardDemo.js';
import CardExperience from '../CardExperience/CardExperience.js';
import './App.css';

//This component is the container for the rest of the app
const App = (props) => {
    return (
        <div className="app">
            <Navbar />
        </div>
    );
}

export default App;
