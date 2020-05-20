import React from 'react';
import IntroCard from '../IntroCard/IntroCard.js';
import IntroBackground from '../IntroBackground/IntroBackground.js';
import SizeModal from '../SizeModal/SizeModal.js';
import NavBar from '../Navbar/Navbar.js';
import CardAboutMe from '../CardAboutMe/CardAboutMe.js';  
import './App.css';

const App = (props) => {

  return (
    <div className="app">
      <NavBar />
      <CardAboutMe iconClassName="fas fa-graduation-cap"
                   iconColor="green"
                   title="Forever A Student"
                   body="With this I am just trying to see if the box will get bigger when I type more. 
                         My running theory is that as I don't say a height specified, only a minimum height, 
                         the box is bound by how much text it is holding. I was correct.">
      </CardAboutMe>
    </div>
  );
}

export default App;
