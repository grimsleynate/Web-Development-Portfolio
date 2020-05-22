import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import CardOffer from '../CardOffer/CardOffer.js';
import CardExperience from '../CardExperience/CardExperience.js';
import './App.css';

//This component is the container for the rest of the app
const App = (props) => {
    return (
        <div className="app">
            <Navbar />
            <CardOffer color1='blue' 
                       color2='purple'
                       icon='public'
                       title='Web Development'
                       body="This is a bit of body text to be used on the card.  thanks for coming to my Ted Talk."
                       />
        </div>
    );
}

export default App;
