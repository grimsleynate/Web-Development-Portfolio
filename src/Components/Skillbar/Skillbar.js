import React from 'react';
import {Typography, LinearProgress} from '@material-ui/core/';
import './Skillbar.css';
import {lighten, makeStyles, withStyles } from '@material-ui/core/styles';

/*
PROPS: 
    color: The color of the skillbar background.  Options: 'pink', 'purple', 'blue', 'green', 'yellow'
    skillName:  The name of the skill
    skillValue:  A number that represents how much is known in that particular skill (out of 100)
*/

const Skillbar = (props) => {

    var color = '#FFF';

    switch(props.color) {
        case 'pink':
            color = '#F15BB5';
            break;
        case 'purple':
            color = '#9B5DE5';
            break;
        case 'blue':
            color = '#00BBF9';
            break;
        case 'green':
            color = '#00F5D4';
            break;
        case 'yellow':
            color = '#FEE440';
            break;
        default:
            break;
    }

    const MyLinearProgress = withStyles({
        root: {
            backgroundColor: lighten(color, 0.5),
            borderRadius: '10px',
            height: '10px',
            maxWidth: '600px'
        },
        bar: {
            backgroundColor: `var(--${props.color})`,
            borderRadius: '10px'

        }
    })(LinearProgress);

    return (
        <div className="skillbar__root">
            <Typography component="h5">{`${props.skillName}`}</Typography>
            <MyLinearProgress variant="determinate" value={props.skillValue}/>
        </div>
    )
}

export default Skillbar;