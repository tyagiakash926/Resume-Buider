import React from 'react';
import './Signin.css'
import skin from '../static/images/—Pngtree—young people work and study_5426650.png';
// import skin1 from '../static/images/pngtree-color-wave-dot-circular-border-png-image_4973413.jpg'

const SignIn = () => {
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
                        <button className="login-btn">Submit</button>
                    </form>
                </div>
             </div>
            );
}
 
export default SignIn;