import React from 'react'
import Button from './Button';
import HomePageGraphic from "../assets/HomePageGraphic.png";

const About = () => {
  return (
    <div className='about'>
        <div className="about-tagline-container">
            <div className="about-tagline">
                <span>YOUR ASSIGNMENT IS FITNESS - </span>
                <span>JOIN THE MVMT</span>
            </div>
            <div className='about-desc'>
                <span>
                    PRJCT MVMT is a boutique fitness studio focused on making you feel, look, and MOVE better! Join us now to make fitness part of your everyday lifestyle whether it's one on one training or our small group training, we’ll get you moving.
                </span>
            </div>
            <div className="about-links">
                <Button text={"Join Now"}/>
                <span>Learn More</span>
            </div>
        </div>
        <div className="about-image">
            <img src={HomePageGraphic} alt="about-image" />
        </div>
    </div>
  );
};

export default About;