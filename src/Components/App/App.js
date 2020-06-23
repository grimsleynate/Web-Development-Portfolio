import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import IntroBackground2 from '../IntroBackground/IntroBackground2.js';
import IntroCard from '../IntroCard/IntroCard.js';
import CardAboutMe from '../CardAboutMe/CardAboutMe.js';
import Skillbar from '../Skillbar/Skillbar.js';
import {Typography,} from '@material-ui/core';
import './App.css';

//This component is the container for the rest of the app
const App = (props) => {
    return (
        <div className="app">
            <Navbar className="app__navBar"/>
            <IntroBackground2 class="app__introBackground2" 
                              bgColor="#202030"
                              color="blue"
                              />
            {/*This is the Card containing my name, location, social media accounts, and more*/}
            <IntroCard />
            {/*This starts the About Me section*/}
            <div className="app__aboutMe">
                <Typography component="h2" 
                            variant="title"
                            className="app__aboutMe-title">
                                About Me
                </Typography>
                {/*These are the cards on the left side, showcasing different soft skills*/}
                <div className="app__aboutMe-cardContainer">
                    <CardAboutMe iconColor="green"
                                iconClassName="fa fa-users"
                                title="Team Player"
                                body="It is important to work as a team if you want to get anything done.  I like to get things done, so I work in a team.
                                    Maybe one more sentence?  I'm not sure how much space I want to take up."
                                />
                    <CardAboutMe iconColor="blue"
                                iconClassName="fa fa-puzzle-piece"
                                title="Problem Solver"
                                body="It is important to work as a team if you want to get anything done.  I like to get things done, so I work in a team.
                                    Maybe one more sentence?  I'm not sure how much space I want to take up."
                                />
                    <CardAboutMe iconColor="pink"
                                iconClassName="fa fa-comments-o"
                                title="Expert Communicator"
                                body="It is important to work as a team if you want to get anything done.  I like to get things done, so I work in a team.
                                    Maybe one more sentence?  I'm not sure how much space I want to take up."
                                />  
                    <CardAboutMe iconColor="purple"
                                iconClassName="fa fa-graduation-cap"
                                title="Forever A Student"
                                body="It is important to work as a team if you want to get anything done.  I like to get things done, so I work in a team.
                                    Maybe one more sentence?  I'm not sure how much space I want to take up."
                                />
                </div>
                {/*These are the skill bars on the right side, showcasing hard skills*/}
                <div className="app__aboutMe-skillbarContainer">
                    <Skillbar color="purple"
                              skillName="CSS3"
                              skillValue="90"
                              />
                    <Skillbar color="pink"
                              skillName="Javascript"
                              skillValue="75"
                              />
                    <Skillbar color="yellow"
                              skillName="C#"
                              skillValue="85"
                              />
                    <Skillbar color="green"
                              skillName="C++"
                              skillValue="70"
                              />
                    <Skillbar color="blue"
                              skillName="Python"
                              skillValue="85"
                              />
                    <Skillbar color="green"
                              skillName="Java"
                              skillValue="65"
                              />
                    <Skillbar color="yellow"
                              skillName="PHP"
                              skillValue="70"
                              />
                    <Skillbar color="pink"
                              skillName="React"
                              skillValue="90"
                              />
                    <Skillbar color="purple"
                              skillName="Ruby"
                              skillValue="15"
                              />
                </div>
            </div>
        </div>
    );
}

export default App;
