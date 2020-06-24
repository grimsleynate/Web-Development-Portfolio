import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import IntroBackground2 from '../IntroBackground/IntroBackground2.js';
import IntroCard from '../IntroCard/IntroCard.js';
import CardAboutMe from '../CardAboutMe/CardAboutMe.js';
import Skillbar from '../Skillbar/Skillbar.js';
import CardExperience from '../CardExperience/CardExperience.js';
import CardOffer from '../CardOffer/CardOffer.js';
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
                    <Skillbar color="pink"
                              skillName="CSS3"
                              skillValue="90"
                              />
                    <Skillbar color="pink"
                              skillName="Javascript"
                              skillValue="75"
                              />
                    <Skillbar color="pink"
                              skillName="C#"
                              skillValue="85"
                              />
                    <Skillbar color="pink"
                              skillName="C++"
                              skillValue="70"
                              />
                    <Skillbar color="pink"
                              skillName="Python"
                              skillValue="85"
                              />
                    <Skillbar color="pink"
                              skillName="Java"
                              skillValue="65"
                              />
                    <Skillbar color="pink"
                              skillName="PHP"
                              skillValue="70"
                              />
                    <Skillbar color="pink"
                              skillName="React"
                              skillValue="90"
                              />
                    <Skillbar color="pink"
                              skillName="Ruby"
                              skillValue="15"
                              />
                </div>
                {/*This component consists of the My Experiences card and the My Education card*/}
                <CardExperience/>
                {/*This container holds the cards that showcase what I offer*/}
                <div className="app__offer-container">
                    <Typography component="h2" 
                                variant="title"
                                className="app__offer-title">
                                    What I offer
                    </Typography>
                    <div className="app__offer-cardContainer">
                        <CardOffer color1="green"
                                   color2="blue"
                                   icon="fa fa-wifi"
                                   title="Web Development"
                                   body="If you are looking at blank cassettes on the web, you may be very confused
                                         at the difference in price.  You may see some for as low as $17 each."
                        />
                        <CardOffer color1="pink"
                                   color2="purple"
                                   icon="fa fa-gamepad"
                                   title="Video Game Programming"
                                   body="If you are looking at blank cassettes on the web, you may be very confused
                                         at the difference in price.  You may see some for as low as $17 each."
                        />
                        <CardOffer color1="yellow"
                                   color2="green"
                                   icon="fa fa-code"
                                   title="Software Engineering"
                                   body="If you are looking at blank cassettes on the web, you may be very confused
                                         at the difference in price.  You may see some for as low as $17 each."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
