import React from 'react';
import './About.css'
import skin from "../static/images/5236.jpg"

const About = () => {
    return ( 
        <div className="about-page">
            <div className="message">
                <p>Do you have any comments and questions ? Our team will happy to assist you</p>
                <p>Send us a message</p>
                <h1>SupportDev@gmail.com</h1>
                <p>We are here to answer any question regarding our resume geneartor, do not</p>
                <p>hesisate to contact us for any reason. We will respond in less than 24 hours from</p>
                <p>receipt of emial. Thanks for trusting us</p>
            </div>
            <div className="about-logo">
                <img src={skin} alt=""/>
            </div>
        </div>
     );
}
 
export default About;