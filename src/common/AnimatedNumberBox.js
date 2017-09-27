import React from 'react';
import CountUp from 'react-countup';


const AnimatedNumberBox = (props) => (

    
    <div className="box">
        <div className="title">{props.title}</div>
        <div className="number"><CountUp start={0} end={props.number} /></div>
    </div>
)

export default AnimatedNumberBox;