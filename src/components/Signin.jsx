
import React, { Component } from 'react';
import './Signin.css'
import {connect} from 'react-redux';
import skin from '../static/images/—Pngtree—young people work and study_5426650.png';
// import skin1 from '../static/images/pngtree-color-wave-dot-circular-border-png-image_4973413.jpg'
import google from '../static/images/search.png';
import { auth, provider } from '../firebase/fbconfig.js';
import {login} from '../actions/authActions'
import { compose } from 'redux';

// const handleLogin = (login) =>{
//     // auth.signInWithPopup(provider).then((user)=>{
//     //     let {displayName , email} = user.user;
//     //     let userDetails= {
//     //         displayName,
//     //         email
//     //     }
//     //     login(userDetails);
//     // })
//     // .catch((error)=>{
//     //     console.log(error);
//     // });
//     let user = {
//         name :"testing"
//     }
//     login(user);
// }


class SignIn  extends Component {
    state = {
        email: "",
        password: "",
      };
    
      onChangeHandler = (e) => {
        e.preventDefault();
        let id = e.target.id;
        let value = e.target.value;
    
        this.setState({
          ...this.state,
          [id]: value,
        });
      };
    
      onSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state);
        // console.log(this.props);
        this.props.history.push("/templates");
      };

    render() { 
        return (
            <div className="loginpage">
                <div className="loginpage-logo">
                    <img src={skin} alt=""/>
                </div>
                <div className="loginpage-info">
                    <div className="loginpage-info-header">USER LOGIN</div>
                    <form className="login-form" >
                        <label htmlFor="email" className="email-label">
                            <input type="email" name="email" id="email" placeholder="email" value={this.state.email} onChange={(e)=>{this.onChangeHandler(e)}}/>
                        </label>
                        <label htmlFor="password" className="password-label">
                            <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={(e)=>{this.onChangeHandler(e)}}/>
                        </label>
                        {/* <div className="signin-google" onClick={()=>{handleLogin(props.login)}}>
                            <div className="google-logo"><img src={google} alt=""/></div>
                            <div className="google-text">Sign In with Google</div>
                        </div> */}
                        <button className="login-btn"  onClick={this.onSubmit}>Submit</button>
                    </form>
                    <div className="error-message">
                    {this.props.message && <span>{this.props.message}</span>}
                    </div>
                </div>
             </div>
            );
    }
}
 
const mapStateToProps = (state) =>{
    return{
        message : state.auth.message
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        login : (userDetails) => {dispatch(login(userDetails))}
    }
}


 
export default connect(mapStateToProps , mapDispatchToProps)(SignIn);