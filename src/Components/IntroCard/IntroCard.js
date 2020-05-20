import React from 'react';
import {Card, CardMedia, Box, Typography, Icon, IconButton} from '@material-ui/core/';
import {Facebook, Twitter, LinkedIn, GitHub} from '@material-ui/icons/';
import './IntroCard.css';

const IconText = (props) => {
    return (
        <div className="iconText">
            <Icon>{props.icon}</Icon>
            <Typography component="p" variant="body1">{props.text}</Typography>
        </div>
    );
}

const IconTextList = (props) => {
    return (
        <div className="iconTextList">
            <IconText icon="phone" text="1(989)217-6087"></IconText>
            <IconText icon="email" text="grimsleynate@gmail.com"></IconText>
            <IconText icon="room" text="West Branch, Michigan"></IconText> 
        </div>
    )
}

const IconList = (props) => {
    return (
        <div className="iconList">
            <ul className="iconList__row1">
                <li>
                    <IconButton href="https://www.facebook.com/nathaniel.grimsley" className="facebook"><Facebook fontSize="large"></Facebook></IconButton>
                </li>
                <li>
                    <IconButton href="https://www.twitter.com/GrimsleyNate" className="twitter"><Twitter fontSize="large"></Twitter></IconButton>
                </li>
                <li>
                    <IconButton href="https://www.linkedin.com/in/nathaniel-grimsley-40b19bb2/" className="linkedin"><LinkedIn fontSize="large"></LinkedIn></IconButton>
                </li>
            </ul>
            <ul className="iconList__row2">
                <li>
                    <IconButton href="https://www.bitbucket.org/grimsleynate" className="bitbucket"><Icon className="fab fa-bitbucket" fontSize="large"></Icon></IconButton>
                </li>
                <li>
                    <IconButton href="https://www.github.com/grimsleynate/" className="github"><GitHub fontSize="large"></GitHub></IconButton>
                </li>
            </ul>
        </div>
    );
}

const IntroCard = (props) => {
    return (
        <Card className="introCard">
            <Box>
                <CardMedia className="introCard__img" component="span" image="img/personal.jpg"></CardMedia>
            </Box>
            <Box className="introCard__textContainer">
                <Typography component="h4" variant="subtitle1"> Welcome to my portfolio, I am</Typography>
                <Typography component="h1" varaint="h1"> Nathaniel Grimsley</Typography>
                <Typography component="h3" variant="caption">Front-End Web Developer • Video Game Programmer • Software Engineer</Typography>
                <Typography component="p" variant="body1" className="subParagraph">I believe in making this a two to three sentence general description.  
                   We can go into detail later, keep this short and sweet. </Typography>
                <div className="contactInfo">
                    <IconTextList></IconTextList>
                    <IconList></IconList>       
                </div>
            </Box>
        </Card>
    );
}

export default IntroCard;