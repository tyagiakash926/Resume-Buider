import React, { Component } from 'react';
import './Register.css'
import skin from '../static/images/—Pngtree—artificial intelligence technology touching the_4031587.png'


class  Register extends Component {
    state = {  }
    render() { 
        return (<React.Fragment>
            <div className="hero">
            <div className="register-page">
                    <div className="rigister-page-heading">Enter Your Details</div>
                    <div className="register-page-form">
                        <form className="register-form">
                            <label htmlFor="email">Email
                                <input type="email" className="email" id="email-register"/>
                            </label>
                            <label htmlFor="password">Password
                                <input type="password" className="password" id="password-register"/>
                            </label>
                            <label htmlFor="cnfrm-password">Cofrm Pw
                                <input type="password" className="cnfrm-password" id="cnfrm-password"/>
                            </label>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>
                 </div>
                 <div className="register-logo">
                     <img src={skin} alt=""/>
                 </div>
            </div>
             
                 </React.Fragment>
         );
    }
}
 
export default  Register;
