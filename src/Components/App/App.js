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
            <CardDemo image="https://via.placeholder.com/600x300"
                      imageTitle="Placeholder Image"
                      gradientColor1='purple'
                      gradientColor2='blue'
                      client="Happy Tales"
                      subtitle="Pet Care"
                      description="Business website built using Bootstrap and GSAP/TweenMax"
                      url="http://happytalespetcare.com/"
                      modalImages={[{image: './img/3_Gus.jpg', title: 'Image 1'},
                                    {image: './img/2_Bella.jpg', title: 'Image 2'},
                                    {image: './img/4_Tucker.jpg', title: 'Image 3'},
                                    {image: './img/5_Teko.jpg', title: 'Image 4'},
                                    {image: './img/6_Mia.jpg', title: 'Image5'}]}
                      aboutProject="On this Open Source project I was responsible for the initial UI/UX architecture, structure, design and animations. 
                                    The idea was to follow the 3 column UX trend of webchats like skype, hipchat, gitter and slack. Building upon that 
                                    an Open Source alternative with similar functionalities. The UI/UX was conceived with a mobile first approach. So it 
                                    would be possible to effortlessly launch it into any platform without making any changes to the main application."
                      technologies={['UI/UX Design', 
                                    'UI/UX Architecture', 
                                    'UI/UX Animations', 
                                    'HTML5 - semantic, audio, video, canvas',
                                    'CSS3 - preprocessed with LESS + LESSHAT',
                                    'Meteor.js',
                                    'Blaze',
                                    'MongoDB']}
                      githubLink='https://grimsleynate.github.io/'
            />
        </div>
    );
}

export default App;
