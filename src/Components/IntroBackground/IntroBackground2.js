import React, { useState, useEffect } from 'react';
import './IntroBackground2.css';
import anime from 'animejs';
import {makeStyles, Card} from '@material-ui/core';

//These are the five block components in the background
/*
PROPS: 
    color: STRING the color of the block
*/
const Block = (props) => {
    //This state stores the color of the block's background
    let color = 'rgba(0, 0, 0, 0)';
    //Depending on the color prop, this will change the background color of the block.
    switch(props.color) {
        case 'pink':
            color = '#F15BB5';
            break;
        case 'purple':
            color = '#985DE5';
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

    const useStyles = makeStyles ({
        root: {
            backgroundColor: color,
            height: '17.5vw',
            width: '17.5vw',
            position: 'relative',
        }
    });

    const classes = useStyles();

    return <Card className={`${classes.root} ${props.color}`}></Card>;
}



const IntroBackground2 = (props) => {
    useEffect(() => {
        var pink = document.querySelectorAll('.pink');
        /*anime ({
            targets: pink,
            translateY: [{value: '-50vh', easing: 'easeOutSine', duration: 500},
                         {value: 0, easing: 'easeOutSine', duration: 500},
                         {value: '-42vh', easing: 'easeOutSine', duration: 500},
                         {value: 0, easing: 'easeOutSine', duration: 500},
                         {value: '-34vh', easing: 'easeOutSine', duration: 500},
                         {value: 0, easing: 'easeOutSine', duration: 500},
                         {value: '-26vh', easing: 'easeOutSine', duration: 500},
                         {value: 0, easing: 'easeOutSine', duration: 500},
                         {value: -'18vh', easing: 'easeOutSine', duration: 500},
                         {value: 0, easing: 'easeOutSine', duration: 500},
                         {value: '-10vh', easing: 'easeOutSine', duration: 500},
                         {value: 0, easing: 'easeOutSine', duration: 500},],
            loop: true,
            direction: 'alternate',
            translateX: {value: '82.5vw', easing: 'easeOutSine', duration: 6000},
        });*/
    });

    return (
        <div className={props.class} style={{backgroundColor: props.bgColor,}}>
            <Block color={props.color} />
        </div>
    );
}

//This export statement exports IntroBackground2 for use in other elements.
//HOW TO USE:  import IntroBackground2 from 'INTROBACKGROUND2.JS LOCATION';
export default IntroBackground2;