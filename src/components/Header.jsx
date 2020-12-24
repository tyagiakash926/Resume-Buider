import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import logo from '../static/images/—Pngtree—elephant logo design vector template_5045290.png'
import { connect } from "react-redux";
import { auth } from '../firebase/fbconfig';
import { logout } from '../actions/authActions';

const handleLogout = (logout) =>{
    logout();
}
const Header = (props) => {
    let {auth} = props;
    return ( 
        <div className="header">
            <div className="header-logo">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="header-links">
                {auth.uid ?
                <ul>
                <li><Link to="/templates">Resume Templates</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/" onClick={()=>{handleLogout(props.logout)}}>Logout</Link></li>
                </ul> :
                <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                </ul>
                }
            </div>
        </div>
     );
}

const mapStateToProps = (state) =>{
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        logout : () =>{dispatch(logout())}
    }
}
 
export default connect(mapStateToProps , mapDispatchToProps)(Header);