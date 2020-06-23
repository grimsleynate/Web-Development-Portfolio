import React, { useEffect } from 'react';
import './IntroBackground.css';
import anime from 'animejs';

//This is a component called Dot.  It creates a div with four props: number (unique dot number), col (column number), x (left margin value), and y (top margin value).
let Dot = (props) => <div className={`dot dot${props.number} col${props.col}`} style={{marginLeft: props.x, marginTop: props.y}}></div>

//This is our IntroBackground component, which we will export for use in other files.
class IntroBackground extends React.Component {
    //this is our constructor method, which must be called for all compoonent classes.
    constructor(props) {
        super(props);
    }
    //this is our render method, which will be called when we want to render this function.
    render() {
        //this variable will keep track of the number of dots.
        var num = 1;
        //this array will hold our dots once the for loop propegates it.
        const items = [];
        if (window.innerWidth <= 1200) 
        {
            const height = ((window.innerHeight) * 0.75);
            const width = ((window.innerWidth * 0.98));
            //this first loop iterates through the row
            for (var i=0; i < height; i+= (height / 15)) {
                var col = 1;
                for (var j=0; j < width; j+= (width / 20)) {
                    var el = <Dot number={num} x={j + 15} y={i + 10} col={col}></Dot>;
                    items.push(el);
                    num+=1;
                    col+=1;
                }
            }
        }
        else 
        {
            const height = ((window.innerHeight) * 0.75);
            const width = ((window.innerWidth * 0.98));
            //this first loop iterates through the row
            for (var i=0; i < height; i+= (height / 15)) {
                var col = 1;
                for (var j=0; j < width; j+= (width / 37)) {
                    var el = <Dot number={num} x={(j + ((window.innerWidth * 0.02) / 2))} y={i + 10} col={col}></Dot>;
                    items.push(el);
                    num+=1;
                    col+=1;
                }
            }
        }
        return (
            <div className="intro__background grid">
                {items}
            </div>
        );
    }
    componentDidMount() {
        //we create an easy-to-reference variable to store our .dot class
        var dots = document.querySelectorAll('.dot');
        //this defines an animation that will happen when this component is mounted or updates
        if (window.innerWidth <= 1200) 
        {
            anime ({
                //we target the dots we created
                targets: dots,
                translateX: [
                    {value: -25, easing: 'easeOutSine', duration: 500},
                    {value: 25, easing: 'easeInOutQuad', duration: 500}
                ],
                delay: anime.stagger(50, {grid: [20, 15], from: 'center'}),
                loop: true
            });
        }
        else 
        {
            anime ({
                //we target the dots we created
                targets: dots,
                translateX: {value: -25, easing: 'easeInOutSine', duration: 100},
                translateY: {value: -25, easing:'easeInOutSine', duration: 100},
                delay: anime.stagger(10, {grid: [37, 15], from: 0, axis: 'x'}),
                loop: true,
                direction: 'alternate',
            }); 
        }
    }
}

//we export our IntroBackground for use in other files
export default IntroBackground;
