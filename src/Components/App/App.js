import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import IntroBackground2 from '../IntroBackground/IntroBackground2.js';
import {IntroCard, IconText} from '../IntroCard/IntroCard.js';
import CardAboutMe from '../CardAboutMe/CardAboutMe.js';
import Skillbar from '../Skillbar/Skillbar.js';
import CardExperience from '../CardExperience/CardExperience.js';
import CardOffer from '../CardOffer/CardOffer.js';
import CardDemo from '../CardDemo/CardDemo.js';
import {Typography, Button, TextField, FormControl, Input} from '@material-ui/core';
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
            {/*This is my latest projects section*/}
            <div className="app__latestProjects-container">
                <Typography component="h2" 
                            variant="title"
                            className="app__latestProjects-title">
                                My Latest Projects
                </Typography>
                <div className="app__latestProjects-cardContainer">
                    <CardDemo image="./img/gallery/HappyTalesGallery.png"
                              imageTitle="Happy Tales Landing Page"
                              gradientColor1="purple"
                              gradientColor2="pink"
                              client="Happy Tales Pet Care"
                              subtitle="Local business"
                              description="Local Business"
                              url="www.happytalespetcare.com"
                              modalImages={[{image : "./img/gallery/HappyTalesDesign.png", title : "Image 1"}, 
                                            {image : "/img/gallery/HappyTalesModal3.png", title : "Image 2"}]}
                              aboutProject="This was a fun project"
                              technologies={["Javascript", "HTML", "CSS3", "React", "Bootstrap"]}
                              githubLink="https://github.com/grimsleynate/grimsleynate.github.io"
                    />
                    <CardDemo image="./img/gallery/HappyTalesGallery.png"
                              imageTitle="Happy Tales Landing Page"
                              gradientColor1="purple"
                              gradientColor2="pink"
                              client="Happy Tales Pet Care"
                              subtitle="Local business"
                              description="Local Business"
                              url="www.happytalespetcare.com"
                              modalImages={[{image : "./img/gallery/HappyTalesDesign.png", title : "Image 1"}, 
                                            {image : "/img/gallery/HappyTalesModal3.png", title : "Image 2"}]}
                              aboutProject="This was a fun project"
                              technologies={["Javascript", "HTML", "CSS3", "React", "Bootstrap"]}
                              githubLink="https://github.com/grimsleynate/grimsleynate.github.io"
                    />
                    <CardDemo image="./img/gallery/HappyTalesGallery.png"
                              imageTitle="Happy Tales Landing Page"
                              gradientColor1="purple"
                              gradientColor2="pink"
                              client="Happy Tales Pet Care"
                              subtitle="Local business"
                              description="Local Business"
                              url="www.happytalespetcare.com"
                              modalImages={[{image : "./img/gallery/HappyTalesDesign.png", title : "Image 1"}, 
                                            {image : "/img/gallery/HappyTalesModal3.png", title : "Image 2"}]}
                              aboutProject="This was a fun project"
                              technologies={["Javascript", "HTML", "CSS3", "React", "Bootstrap"]}
                              githubLink="https://github.com/grimsleynate/grimsleynate.github.io"
                    />
                </div>
            </div>
            {/*This is my contact form*/}
            <div className="app__contact-container">
                {/*This is the title and the subtitle for the contact form*/}
                <Typography variant="title" 
                            component="h3"
                            className="app__contact-title">
                                Contact Me
                </Typography>
                <Typography variant="subtitle" 
                            component="h4"
                            className="app__contact-subtitle">
                                If you have an questions, comments, or offers I would love to hear it!
                </Typography>
                {/*This holds all of the contact area, except for the title and subtitle */}
                <div className="app__contact-masterContainer">
                    {/*This container holds all of the icon/text combos*/}
                    <div className="app__contact-iconTextContainer">
                        <IconText icon="room"
                                  text="Lansing, Michigan"
                        />
                        <Typography component="p"
                                    variant="subtitle"
                                    className="app__contact-iconTextSubtitle">
                                        48906
                        </Typography>
                        <IconText icon="phone"
                                  text="(989)217-6087"
                        />
                        <Typography component="p"
                                    variant="subtitle"
                                    className="app__contact-iconTextSubtitle">
                                        Mon thru Fri, 8:00 AM - 6:00 PM
                        </Typography>
                        <IconText icon="email"
                                  text="grimsleynate@gmail.com"
                        />
                        <Typography component="p"
                                    variant="subtitle"
                                    className="app__contact-iconTextSubtitle">
                                        Send me your questions any time!
                        </Typography>
                    </div>
                    {/*This container holds our actual form*/}
                    <div className="app__contact-formContainer">
                        {/*I'm using formspree to handle my form instead of building out a form handler myself*/}
                        <form action="https://formspree.io/mdowlnja" method="POST">
                            {/*I divied my form up into seperate containers so that I can easily use flexbox to
                                move and position the different elements*/}
                            <div className="app__contact-formControl">
                                {/*This container holds the name, email, and subject inputs*/}
                                <div className="app__contact-formControl1">
                                    <TextField placeholder="Jane Doe" 
                                        name="Name"
                                        label="Name"
                                        inputProps={{ 'aria-label': 'description' }} 
                                        variant="outlined"
                                        className="app__contact-input"
                                    />
                                    <TextField placeholder="janedoe@example.com" 
                                        name="Email"
                                        label="Email"
                                        inputProps={{ 'aria-label': 'description' }}
                                        variant="outlined"
                                        className="app__contact-input"  
                                    />
                                    <TextField placeholder="Requesting A Quote" 
                                        name="Subject"
                                        label="Subject"
                                        inputProps={{ 'aria-label': 'description' }}  
                                        variant="outlined"
                                        className="app__contact-input"
                                    />
                                </div>
                                {/*This container stores the Message input and the submit button*/}
                                <div className="app__contact-formControl2">
                                    <TextField placeholder="Message Text" 
                                               name="Message"
                                               label="Message"
                                               inputProps={{ 'aria-label': 'description' }}
                                               multiline
                                               rows={7}
                                               variant="outlined"
                                               className="app__contact-input"  
                                    />
                                    <Button type="submit"
                                            variant="contained"
                                            className="app__contact-button">
                                                Send Message
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*This starts our footer section*/}
        </div>
    );
}

export default App;
