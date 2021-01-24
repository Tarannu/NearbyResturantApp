import React from 'react';
import Choila from '../../assets/duck_choila.jpg';
import './About.css';

const About = (props) => {
    
    return(
        <div className="About">
            <p className="AboutPara">
                We bring foodlovers the best South Asian food in town.
            </p>
            <img className="FoodImage" src={Choila} alt="chicken momo"/>
        </div>
    )
}

export default About;