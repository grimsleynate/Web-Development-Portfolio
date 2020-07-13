import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import IntroBackground2 from '../IntroBackground/IntroBackground2.js';
import {IntroCard, IconText, IconList} from '../IntroCard/IntroCard.js';
import CardAboutMe from '../CardAboutMe/CardAboutMe.js';
import Skillbar from '../Skillbar/Skillbar.js';
import CardExperience from '../CardExperience/CardExperience.js';
import CardOffer from '../CardOffer/CardOffer.js';
import CardDemo from '../CardDemo/CardDemo.js';
import {Typography, Button, TextField, FormControl, Input} from '@material-ui/core';
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';
import './App.css';

//This component is the container for the rest of the app
const App = (props) => {
    return (
        <div className="app"
             id="Home">
            <Navbar className="app__navBar"/>
            <IntroBackground2 class="app__introBackground2" 
                              bgColor="#202030"
                              color="blue"
                              />
            {/*This is the Card containing my name, location, social media accounts, and more*/}
            <IntroCard />
            {/*This starts the About Me section*/}
            <div className="app__aboutMe"
                 id="About">
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
                                body="I believe that I have a lot to contribute to a team environment, 
                                      and am comfortable in both leadership and contributor roles. 
                                      I'm outgoing, friendly, and have strong communication skills."
                                />
                    <CardAboutMe iconColor="blue"
                                iconClassName="fa fa-puzzle-piece"
                                title="Critical Thinker"
                                body="I believe that critical thinking is the most important skill a 
                                      developer could have.  Strong critical thinking skills lead to 
                                      cleaner, more maintainable code."
                                />
                    <CardAboutMe iconColor="pink"
                                iconClassName="fa fa-comments-o"
                                title="Expert Communicator"
                                body="Any communication problems can lead to a drastic negative impact on
                                      the project.  I pride myself on my ability to communicate issues and 
                                      instructions to both experienced developers and non-technical staff alike."
                                />  
                    <CardAboutMe iconColor="purple"
                                iconClassName="fa fa-graduation-cap"
                                title="Forever A Student"
                                body="As a developer, there is always something new to learn.  Thankfully,
                                      I love to learn!  Not only do I love to learn, I love to teach
                                      other people new things too."
                                />
                </div>
                {/*These are the skill bars on the right side, showcasing hard skills*/}
                <div className="app__aboutMe-skillbarContainer">
                    <div className="app__skillbar-list1">
                        <Typography component="h4"
                                    variant="subtitle"
                                    className="app__skillbar-title">
                                        Proficient With:
                        </Typography>
                        <Skillbar color="pink"
                                skillName="HTML5"
                                skillValue="85"
                                />
                        <Skillbar color="pink"
                                skillName="CSS3"
                                skillValue="75"
                                />
                        <Skillbar color="pink"
                                skillName="React"
                                skillValue="70"
                                />
                        <Skillbar color="pink"
                                skillName="Javascript"
                                skillValue="65"
                                />
                        <Skillbar color="pink"
                                skillName="git/Github"
                                skillValue="65"
                                />
                    </div>
                    <div className="app__skillbar-list2">
                        <Typography component="h4"
                                    variant="subtitle"
                                    className="app__skillbar-title app__skillbar-title2"
                                    >
                                        Experience With:
                        </Typography>
                        <Skillbar color="blue"
                                skillName="Redux"
                                skillValue="50"
                                />
                        <Skillbar color="blue"
                                skillName="Python"
                                skillValue="50"
                                />
                        <Skillbar color="blue"
                                skillName="C#"
                                skillValue="45"
                                />
                        <Skillbar color="blue"
                                skillName="SQL"
                                skillValue="30"
                                />
                        <Skillbar color="blue"
                                skillName="PHP"
                                skillValue="25"
                                />
                    </div>
                </div>
            </div>
            {/*This component consists of the My Experiences card and the My Education card*/}
            <div id="Experience">
                <CardExperience/>
            </div>
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
                                title="Front-End Web Development"
                                body="I have experience creating full websites for small businesses, including
                                      design, development, testing, and deployment."
                    />
                    <CardOffer color1="pink"
                                color2="purple"
                                icon="fa fa-gamepad"
                                title="Video Game Programming"
                                body="I have created both board games and video games as a part of the curriculum
                                      at the University of Advancing Technology"
                    />
                    <CardOffer color1="yellow"
                                color2="green"
                                icon="fa fa-code"
                                title="Software Engineering"
                                body="I have experience using both C# and React Native to create software.  I do best
                                      working in an Agile environment, preferably with the SCRUM framework."
                    />
                </div>
            </div>
            {/*This is my latest projects section*/}
            <div className="app__latestProjects-container"
                 id="Portfolio">
                <Typography component="h2" 
                            variant="title"
                            className="app__latestProjects-title">
                                My Latest Projects
                </Typography>
                <div className="app__latestProjects-cardContainer">
                    <CardDemo image="./img/gallery/HTModal1.png"
                              imageTitle="Happy Tales Main Picture"
                              gradientColor1="purple"
                              gradientColor2="pink"
                              client="Happy Tales Pet Care"
                              subtitle="Small Business"
                              description="A small business specializing in pet care."
                              url="http://www.happytalespetcare.com"
                              modalImages={[{image : "./img/gallery/HTModal1.png", title : "Demo Image for Happy Tales Website"},
                                            {image : "./img/gallery/HTModal2.jpg", title : "Demo Image for Happy Tales Website"}, 
                                            {image : "./img/gallery/HTModal3.png", title : "Demo Image for Happy Tales Website"},
                                            {image : "./img/gallery/HTModal4.jpg", title : "Demo Image for Happy Tales Website"}]}
                              aboutProject="Happy Tales Pet Care provides numerous pet-related services to their local area. This
                                            is a custom website written in HTML5 and Javascript, with Bootstrap as the framework."
                              technologies={["Javascript", "HTML", "CSS3", "ScrollMagic", "Bootstrap", "GSAP", "git", "Github"]}
                              githubLink="https://github.com/grimsleynate/grimsleynate.github.io"
                    />
                    <CardDemo image="./img/gallery/BDCMain.jpg"
                              imageTitle="Bear Den Cottages Main Page"
                              gradientColor1="green"
                              gradientColor2="yellow"
                              client="Bear Den Cottages"
                              subtitle="Vacation Cabin Rentals"
                              description="Vacation cabin rentals in Houghton Lake, Michigan"
                              url="https://www.beardencottages.com"
                              modalImages={[{image : "./img/gallery/BDCModal1.png", title : "Demo Image for Bear Den Cottages Website"},
                                            {image : "./img/gallery/BDCModal2.png", title : "Demo Image for Bear Den Cottages Website"},
                                            {image : "./img/gallery/BDCModal3.png", title : "Demo Image for Bear Den Cottages Website"}, 
                                            {image : "./img/gallery/BDCModal4.png", title : "Demo Image for Bear Den Cottages Website"}]}
                              aboutProject="Bear Den Cottages provides rental cabins in the Houghton Lake Area.  This website was built in Wordpress using PHP and Javascript."
                              technologies={["Javascript", "PHP", "CSS3", "Wordpress"]}
                              githubLink="https://www.beardencottages.com"
                    />
                    <CardDemo image="./img/gallery/PModal1.png"
                              imageTitle="Portfolio Main Page"
                              gradientColor1="green"
                              gradientColor2="blue"
                              client="Nathaniel Grimsley"
                              subtitle="Front-End Web Developer"
                              description="A website created for a web developer."
                              url="https://www.nathanielgrimsley.com"
                              modalImages={[{image : "./img/gallery/PModal1.png", title : "Demo Image for Nathaniel Grimsley's Portfolio"},
                                            {image : "./img/gallery/PModal2.png", title : "Demo Image for Nathaniel Grimsley's Portfolio"},
                                            {image : "./img/gallery/PModal3.png", title : "Demo Image for Nathaniel Grimsley's Portfolio"}, 
                                            {image : "./img/gallery/PModal4.png", title : "Demo Image for Nathaniel Grimsley's Portfolio"}]}
                              aboutProject="This website is used to showcase projects created by Nathaniel Grimsley.  This is a custom website created using React and CSS3, with the Material-UI framework."
                              technologies={["Javascript", "React", "CSS3", "HTML5", "Material-UI", "Anime.js", "git", "Github"]}
                              githubLink="https://github.com/grimsleynate/Web-Development-Portfolio"
                    />
                </div>
            </div>
            {/*This is my contact form*/}
            <div className="app__contact-container"
                 id="Contact">
                {/*This is the title and the subtitle for the contact form*/}
                <Typography variant="title" 
                            component="h3"
                            className="app__contact-title">
                                Contact Me
                </Typography>
                <Typography variant="subtitle" 
                            component="h4"
                            className="app__contact-subtitle">
                                If you have an questions or comments, I would love to hear them!
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
            <div className="app__footer-container">
                {/*This container holds the contact portion of the footer*/}
                <div className="app__footer-contact">
                    <Typography className="app__footer-contactTitle"
                                component="h4"
                                variant="title">
                                    Contact
                    </Typography>
                    <Typography className="app__footer-contactSubtitle"
                                component="h4"
                                variant="subtitle">
                                    Like what you see? You can contact me through email
                                    at grimsleynate@gmail.com or through phone at 
                                    1(989)217-6087
                    </Typography>
                </div>
                {/*This container holds the social media portion of the footer */}
                <div className="app__footer-social">
                    <Typography className="app__footer-socialTitle"
                                component="h4"
                                variant="title">
                                    Follow Me
                    </Typography>
                    <Typography className="app__footer-socialSubtitle"
                                component="h4"
                                variant="subtitle">
                                    Let's be social!
                    </Typography>
                    <div className="app__contact-socialMediaButtons">
                        <IconList />
                    </div>
                </div>
                {/*This container holds the copyright portion of the footer*/}
                <div className="app__footer-copyright">
                    <div className="copyright-container">
                    <Typography className="app__footer-copyrightText"
                                component="p"
                                variant="body">
                                    Copyright © 2020 All rights reserved | <a href="www.github.com/grimsleynate">Nathaniel Grimsley</a>
                    </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
