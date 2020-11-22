import React from 'react';
import './LandingPage.css';
import skin from  "../static/images/3123473.jpg";
import { Link } from 'react-router-dom';



const Landing = () => {
    return ( 
        <div className="landingpage">
            <div className="landingpage-intro">
                <h1>Create a resume that unquie</h1>
                <p>create a Resume that perfectly describe your skills and match your job profile</p>
                <Link to="/templates">

                <button className="landingpage-btn">Get Started For Free</button>
                </Link>
            </div>
            <div className="landingpage-logo">
                <img src={skin} alt=""/>
            </div>
        </div>
     );
}
 
export default Landing;