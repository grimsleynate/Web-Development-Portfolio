import React from 'react';
import './CardAboutMe.css';
import {Card, CardContent, Typography, Icon} from '@material-ui/core/';

//this component is a card that holds an icon, a title, and a body of text.
/*
PROPS LIST:
    iconColor: the color of the icon
    iconClassName:  the class name for the icon. i.e.: 'fas fa-graduation-cap'
    title:  the title for the card.
    body:  the body of text to be rendered on the card.

CLASS LIST:
    root: aboutMe__root
    icon: aboutMe__icon
    title: aboutMe__title
    body: aboutMe__body
*/
const CardAboutMe = (props) => {
    //this object stores the style rules for the icon
    const myStyle = {
        color: `var(--${props.iconColor})`
    }

    return (
        <Card className="aboutMe__root">
            <CardContent>
                <Icon className={`aboutMe__icon ${props.iconClassName}`} style={myStyle}></Icon>
                <Typography component="h3" className="aboutMe__title">
                    {props.title}
                </Typography>
                <Typography component="p" className="aboutMe__body">
                    {props.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardAboutMe;