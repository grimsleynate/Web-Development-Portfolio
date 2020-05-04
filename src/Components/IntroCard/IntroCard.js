import React from 'react';
import Card from '@material-ui/core/card';
import CardMedia from '@material-ui/core/CardMedia';
import './IntroCard.css';

function IntroCard() {
    return (
        <Card className="introCard">
            <CardMedia className="imgSelf" component="span" image="https://via.placeholder.com/700"></CardMedia>
        </Card>
    );
}

export default IntroCard;