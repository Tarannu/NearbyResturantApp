import React from 'react';
import ChickenMomo from '../../assets/chicken_momo.jpg';
import './About.css';

const About = (props) => {
    
    return(
        <div className="About">
            <p className="AboutPara">
                We bring foodlovers the best South Asian food in town.
            </p>
            <img className="FoodImage" src={ChickenMomo} alt="chicken momo"/>
        </div>
    )
}

export default About;