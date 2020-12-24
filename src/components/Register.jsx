import React, { Component } from 'react';
import './Register.css'
import { connect } from 'react-redux';
import {signup} from '../actions/authActions';
import skin from '../static/images/—Pngtree—artificial intelligence technology touching the_4031587.png'




class  Register extends Component {
    state = { 
        emailregister:"",
        passwordregister:"",
     }

     onChangeHandler = (e) => {
        e.preventDefault();
        let id = e.target.id;
        let value = e.target.value;
    
        this.setState({
          ...this.state,
          [id]: value,
        });
      };
    
      onsignUp = (e) =>{
          e.preventDefault();
          console.log(this.props)
          this.props.signup(this.state);
          this.props.history.push("/templates")
      }


    render() { 
        
        return (<React.Fragment>
            <div className="hero">
            <div className="register-page">
                    <div className="rigister-page-heading">Enter Your Details</div>
                    <div className="register-page-form">
                        <form className="register-form">
                            <label htmlFor="email">Email
                                <input type="email" className="email" id="emailregister" value={this.state.emailregister} onChange={(e)=>{this.onChangeHandler(e)}}/>
                            </label>
                            <label htmlFor="password">Password
                                <input type="password" className="password" id="passwordregister" value={this.state.passwordregister} onChange={(e)=>{this.onChangeHandler(e)}}/>
                            </label>
                            
                            <button type="submit" className="submit-btn" onClick={(e)=>{this.onsignUp(e)}}>Submit</button>
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

const mapPropsToState = (state) =>{
    return {
        message : state.auth.message
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        signup : (userDetails) => {dispatch(signup(userDetails))}
    }
}

 
export default connect(mapPropsToState , mapDispatchToProps)(Register);
