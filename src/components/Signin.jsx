import React from 'react';
import './Signin.css'
import {connect} from 'react-redux';
import skin from '../static/images/—Pngtree—young people work and study_5426650.png';
// import skin1 from '../static/images/pngtree-color-wave-dot-circular-border-png-image_4973413.jpg'
import google from '../static/images/search.png';
import { auth, provider } from '../firebase/fbconfig.js';

const handleLogin = (login) =>{
    auth.signInWithPopup(provider).then((user)=>{
        let {displayName , email} = user.user;
        let userDetails= {
            displayName,
            email
        }
        login(userDetails);
    })
    .catch((error)=>{
        console.log(error);
    });
}
const SignIn = (props) => {
    return (
           

            <div className="loginpage">
                <div className="loginpage-logo">
                    <img src={skin} alt=""/>
                </div>
                <div className="loginpage-info">
                    <div className="loginpage-info-header">USER LOGIN</div>
                    <form className="login-form" >
                        <label htmlFor="email" className="email-label">
                            <input type="email" name="email" id="email" placeholder="email"/>
                        </label>
                        <label htmlFor="password" className="password-label">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </label>
                        <div className="signin-google" onClick={()=>{handleLogin(props.login)}}>
                            <div className="google-logo"><img src={google} alt=""/></div>
                            <div className="google-text">Sign In with Google</div>
                        </div>
                        <button className="login-btn">Submit</button>
                    </form>
                </div>
             </div>
            );
}

const mapStateToProps = (state) =>{
    return{
        auth : state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        login : (userDetails) => {dispatch({type:"LOGIN" , userDetails: userDetails})}
    }
}
 
export default connect(mapStateToProps , mapDispatchToProps)(SignIn);