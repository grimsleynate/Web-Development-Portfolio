import React from 'react';
import './CardAboutMe.css';
import {Card, CardContent, Typography, Button, Icon} from '@material-ui/core/';

const CardAboutMe = (props) => {
    const myStyle = {
        color: `var(--${props.iconColor}`
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