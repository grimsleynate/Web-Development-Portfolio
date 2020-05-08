import React, { useEffect } from 'react';
import './IntroBackground.css';
import anime from 'animejs';

function Square(props) {
    useEffect(() => {
        anime ({
            targets: `.square${props.numeber}`,
            translateX: 250
        })
    });

    return (
        <div className={`square square${props.number}`}></div>
    );
}

function IntroBackground() {

    useEffect(() => {
        var squares = document.querySelectorAll('.square');
        anime ({
            targets: squares,
            rotate: 360,
            duration: 2000,
            loop: true,
            easing: 'easeInOutSine'
        })
    });

    return (
        <div className="intro__background">
            <Square number={1}></Square>
            <div className="square square2"></div>
            <div className="square square3"></div>
            <div className="square square4"></div>
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="triangle triangle1"></div>
            <div className="triangle triangle2"></div>
            <div className="hexagon hex1"></div>
            <div className="hexagon hex2"></div>
        </div>
    );
}

export default IntroBackground;
