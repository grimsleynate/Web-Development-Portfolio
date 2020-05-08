import React, { useEffect } from 'react';
import './IntroBackground.css';
import anime from 'animejs';

let Square = (props) => <div className={`square square${props.number}`}></div>
let Circle = (props) => <div className={`circle circle${props.number}`}></div>
let Triangle = (props) => <div className={`triangle triangle${props.number}`}></div>
let Hex = (props) => <div className={`hexagon hex${props.number}`}></div>

function IntroBackground() {

    useEffect(() => {
        var squares = document.querySelectorAll('.square');
        var circles = document.querySelectorAll('.circle');
        var triangles = document.querySelectorAll('.triangle');
        var hexes = document.querySelectorAll('.hexagon');

        anime ({
            targets: [squares, circles, triangles, hexes],
            translateX: 360,
            duration: 2000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad'
        })
    });

    return (
        <div className="intro__background">
            <Square number={1}></Square>
            <Circle number={1}></Circle>
            <Triangle number={1}></Triangle>
            <Hex number={1}></Hex>
        </div>
    );
}

export default IntroBackground;
