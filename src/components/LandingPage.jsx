import React, { Component } from 'react';
import './LandingPage.css';
import skin from  "../static/images/3123473.jpg";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { updateState } from '../actions/updateActions';


class Landing  extends Component {
    state = {  }
    getStartedHandler = () =>{
        console.log(this.props);
        let uid = this.props.firebaseAuth.uid;
        let data = this.props.firebaseData.resumes[uid];
        console.log(data);
        // dispatch ????
        this.props.updateState(data);
        this.props.history.push("/templates");
    }
    render() { 
        return ( <div className="landingpage">
        <div className="landingpage-intro">
            <h1>Create a resume that unquie</h1>
            <p>create a Resume that perfectly describe your skills and match your job profile</p>
            {this.props.firebaseAuth.uid ? 
            <button className="landingpage-btn" onClick={this.getStartedHandler}>Get Started For Free</button>:
            <span>Loading......</span>}  
        </div>
        <div className="landingpage-logo">
            <img src={skin} alt=""/>
        </div>
    </div> );
    }
}

const mapStateToProps = (state)=>{
    return {
        firebaseAuth : state.firebase.auth ,
        firebaseData : state.firestore.data 
    };
}


const mapDispatchToProps = (dispatch)=>{
    return{
     updateState : (state) => { dispatch( updateState(state) )} 
    }
}

export default compose(connect(mapStateToProps , mapDispatchToProps) ,firestoreConnect([{collection:"resumes"}]))(Landing);