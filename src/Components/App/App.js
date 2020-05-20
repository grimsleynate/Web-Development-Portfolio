import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import Skillbar from '../Skillbar/Skillbar.js';
import './App.css';

//This component is the container for the rest of the app
const App = (props) => {
    return (
        <div className="app">
            <Navbar />
            <Skillbar color="pink"
                      skillName="React"
                      skillValue={70}
            />
        </div>
    );
}

export default App;
