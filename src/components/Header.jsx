import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import logo from '../static/images/—Pngtree—elephant logo design vector template_5045290.png'

const Header = () => {
    return ( 
        <div className="header">
            <div className="header-logo">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="header-links">
                <ul>
                    <li><Link to="/templates">Resume Templates</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/register">
                        <button className="btn">Register</button>
                        </Link></li>
                    <li><Link to="signin">Sign In</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;