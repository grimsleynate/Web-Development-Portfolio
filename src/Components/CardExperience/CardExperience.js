import React, {useState} from 'react';
import './CardExperience.css';
import {Card, Typography, CardContent, Button, ButtonGroup} from '@material-ui/core';

//this component holds the card with my Experience content on it
/*
PROPS LIST:
    none
*/
const ExpContent = (props) => {

    return (
        <Card className='expCard__root'>
            <CardContent>
                <div className='expCard__content-container'>
                    <ul className="expCard__list-container">
                        {/*These are the list items.  each item contains:
                            Company Title, Dates of Employment, Job Title, and the Job Location*/}
                        <li className="expCard__listItem">
                            {/*This is the circle with a background you see on the list's seperating line*/}
                            <div className="circleDivider">
                                <span className="span1"></span>
                                <span className="span2"></span>
                            </div>
                            <div>
                                <Typography className="expCard__listItem-title" component="h4">GRA Benefits</Typography>
                                <Typography className="expCard__listItem-date" component="p">August 2020 to Present</Typography>
                                <Typography className="expCard__listItem-jobTitle" component="p">Front-End Developer</Typography>
                                <Typography className="expCard__listItem-location" component="p">Lansing, Michigan</Typography>
                            </div>
                        </li>
                        <li className="expCard__listItem">
                            <div className="circleDivider">
                                <span className="span1"></span>
                                <span className="span2"></span>
                            </div>
                            <div>
                                <Typography className="expCard__listItem-title" component="h4">Deadhead Media</Typography>
                                <Typography className="expCard__listItem-date" component="p">May 2018 to Present</Typography>
                                <Typography className="expCard__listItem-jobTitle" component="p">Front End Web Developer</Typography>
                                <Typography className="expCard__listItem-location" component="p">West Branch, Michigan</Typography>
                            </div>
                        </li>
                        <li className="expCard__listItem">
                            <div className="circleDivider">
                                <span className="span1"></span>
                                <span className="span2"></span>
                            </div>
                            <div>
                                <Typography className="expCard__listItem-title" component="h4">UAT Game Studios</Typography>
                                <Typography className="expCard__listItem-date" component="p">August - November 2018</Typography>
                                <Typography className="expCard__listItem-jobTitle" component="p">Team Lead</Typography>
                                <Typography className="expCard__listItem-location" component="p">Tempe, Arizona</Typography>
                            </div>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}

//this component holds the card with my Education content on it
/*
PROPS LIST:
    none
*/
const EduContent = (props) => {
    return (
        <Card className='eduCard__root'>
            <CardContent>
                <div className='eduCard__content-container'>
                    <ul className="eduCard__list-container">
                    {/*These are the list items.  each item contains:
                            College Name, Dates Attended, Major, and College Location*/}
                        <li className="eduCard__listItem">
                            <div className="circleDivider">
                                <span className="span1"></span>
                                <span className="span2"></span>
                            </div>
                            <div>
                                <Typography className="eduCard__listItem-title" component="h4">University of Advancing Technology</Typography>
                                <Typography className="eduCard__listItem-date" component="p">Sept 2017 - October 2019</Typography>
                                <Typography className="eduCard__listItem-jobTitle" component="p">Video Game Programming</Typography>
                                <Typography className="eduCard__listItem-location" component="p">Tempe, Arizona</Typography>
                            </div>
                        </li>
                        <li className="eduCard__listItem">
                            <div className="circleDivider">
                                <span className="span1"></span>
                                <span className="span2"></span>
                            </div>
                            <div>
                                <Typography className="eduCard__listItem-title" component="h4">Kirtland Community</Typography>
                                <Typography className="eduCard__listItem-title" component="h4">College</Typography>
                                <Typography className="eduCard__listItem-date" component="p">Sept 2009 - October 2010</Typography>
                                <Typography className="eduCard__listItem-jobTitle" component="p">Computer Science</Typography>
                                <Typography className="eduCard__listItem-location" component="p">Roscommon, Michigan</Typography>
                            </div>
                        </li>
                        <li className="eduCard__listItem">
                            {/*This is the circle with a background you see on the list's seperating line*/}
                            <div className="circleDivider">
                                <span className="span1"></span>
                                <span className="span2"></span>
                            </div>
                            <div>
                                <Typography className="eduCard__listItem-title" component="h4">Alpena Community</Typography>
                                <Typography className="eduCard__listItem-title" component="h4">College</Typography>
                                <Typography className="eduCard__listItem-date" component="p">Sept 2007 - July 2009</Typography>
                                <Typography className="eduCard__listItem-jobTitle" component="p">General Studies</Typography>
                                <Typography className="eduCard__listItem-location" component="p">Alpena, Michigan</Typography>
                            </div>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}

//this is the container component that holds either the Experience card or the Education card
/*
PROPS LIST:
    none
*/
const CardExperience = (props) => {
    //this state is meant to hold either the ExpContent component or the EduContent component,
    const [currentContent, setCurrentContent] = useState(<ExpContent />);

    //handleClick is triggered by either of the two buttons that are rendered.
    const handleClick = (content) => {
        switch(content) {
            case 'experience':
                setCurrentContent(<ExpContent />);
                break;
            case 'education':
                setCurrentContent(<EduContent />);
                break;
            default:
                setCurrentContent(<ExpContent />);
                break;
        }
    }
    
    return (
        <div className="cardExperience__root">
            <ButtonGroup className="expCard__buttonGroup" size="large" color="primary" aria-label="large outlined primary button group">
                {/*These buttons pass a string to our event handler, 
                    which changes this component's state depending on the string.*/}
                <Button className='expCard__expButton' variant="contained" onClick={(e) => handleClick('experience', e)}>My Experiences</Button>
                <Button className='expCard__eduButton' variant="contained" onClick={(e) => handleClick('education', e)}>My Education</Button>
            </ButtonGroup>
            {/*This renders the result of our currentContent state to the screen*/}
            {currentContent}
        </div>
    );
}

export default CardExperience;