import React from 'react';
import './IntroBackground.css';
import anime from 'animejs/lib/anime.es.js';

class Square extends React.Component {
    render() {
        return <div className={`square square${ this.props.number}`}></div>
    }
}

function IntroBackground() {
    return (
        <div className="intro__background">
            <Square number="1"></Square>
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
