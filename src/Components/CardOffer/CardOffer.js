import React, {useState} from 'react';
import './CardOffer.css';
import {Typography, Card, CardContent, Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

//This component is a card meant to showcase what something can offer.
/* 
PROPS LIST:
    color1: The first color in the icon's gradient when you hover over the card
    color2: The second color in the icon's gradient when you hover over the card
    icon:   The icon to be displayed at the top of the card.  material-ui icons and fontawesome icons work.
    title:  The title to be displayed under the icon.
    body:   The body text that is displayed after the title
*/

const CardOffer = (props) => {
    //the variables are use to store the default grays in the icon's background gradient
    const defaultColor1 = "#ccc";
    const defaultColor2 = "#eee";
    //these states store the first and second gradient color for the icon, with our
    //grays being the default.
    const [myColor1, setMyColor1] = useState(defaultColor1);
    const [myColor2, setMyColor2] = useState(defaultColor2);
    //I stored the icon's style here because it is easier to dynamically change than 
    //vanilla css.
    const myStyles = makeStyles({
        icon: {
            background: `linear-gradient(0.25turn, ${myColor1}, ${myColor2})`,
            fontSize: '60px',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginTop: '80px',
        },
    });
    const classes = myStyles(props);
    //this changes the icon's gradient color when you enter the card.
    const handleMouseEnter = (event) => {
        //I'm storing the color props in easy-to-access variables
        let color1 = props.color1;
        let color2 = props.color2;
        //this runs through the first color prop, color1, and changes the first
        //part of the icon's gradient based on the value
        switch(color1) {
            case 'pink':
                setMyColor1('#F15BB5');
                break;
            case 'purple':
                setMyColor1('#9B5DE5');
                break;
            case 'blue':
                setMyColor1('#00BBF9');
                break;
            case 'green':
                setMyColor1('#00F5D4');
                break;
            case 'yellow':
                setMyColor1('#FEE440');
                break;
            default:
                break;
        }
        //this runs through the second color prop, color2, and changes the second
        //part of the icon's gradient based on the value
        switch(color2) {
            case 'pink':
                setMyColor2('#F15BB5');
                break;
            case 'purple':
                setMyColor2('#9B5DE5');
                break;
            case 'blue':
                setMyColor2('#00BBF9');
                break;
            case 'green':
                setMyColor2('#00F5D4');
                break;
            case 'yellow':
                setMyColor2('#FEE440');
                break;
            default:
                break;
        }
    };
    //this changes the icon gradient back to gray when the mouse leaves the card
    const handleMouseLeave = (event) => {
        setMyColor1(defaultColor1);
        setMyColor2(defaultColor2);
    };

    return (
        <Card className="cardOffer__root" component="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardContent className="cardOffer__cardContent">
                <Icon className={`cardOffer__icon ${classes.icon} ${props.icon}`} component="i">{props.icon}</Icon>
                <Typography component="h2">{props.title}</Typography>
                <Typography component="p">{props.body}</Typography>
            </CardContent>
        </Card>
    );
}

export default CardOffer;