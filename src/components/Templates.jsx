import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {skinCodes} from '../Constants/skinCodes'
import { updateState } from '../actions/updateActions';
import { firestoreConnect } from 'react-redux-firebase';
import Preview from '../components/Preview';

import "./Templates.css";
import { updateDocument } from '../actions/documentActions';

class Templates extends Component {
    state = { 
      
        contact:this.props.contactDetails,
        education:this.props.educationDetails,
        skills : this.props.skills,
        projects: this.props.projects,
        skinCode : this.props.skinCode
     }
  
     handleSkinSelect = (skinCode) =>{
      //  console.log(skinCode);
      this.props.changeSkinCode(skinCode);
      let uid = this.props.firebaseAuth.uid;
      let data = this.props.firebaseData.resumes[uid];
      this.props.updateState(data);

      this.props.history.push("/contact");
     }
  
     componentDidMount(){
       console.log("inside mount" , this.props.skinCode);
     }
  
     componentWillReceiveProps(newProps){
       console.log(newProps);
       this.setState({
         skinCode : newProps.skinCode
       })
  
       
     }
  
  
    render() { 
      let {contact , education , skills , projects , skinCode} = this.state;
      return (
        <div className="templates">
          <div className="templates-intro">
            <h1>Select a resume template to get started</h1>
            <p>You’ll be able to edit and change this template later!</p>
          </div>
          <div className="templates-styles">
          {skinCodes.map(  ( skin ) => {
          let className = skin.value == skinCode ? "selected-skin" : "";
          return <div key = {skin.id} className={`template ${className}`} >
              <img src= {`/images/${skin.value}.svg`} alt="" />
              {skin.value == skinCode?<i class="fa fa-check-circle" aria-hidden="true" onClick = { ()=> {this.handleSkinSelect(skin.value)} }></i>:<button class="template-btn" onClick = { ()=> {this.handleSkinSelect(skin.value)} }>USE TEMPLATE</button>}
            </div>
        })}
          </div>
          <div className="preview-form-template">
            <Preview contact={contact}   education = {education} skills={skills} projects={projects} skin={skinCode} ></Preview>
          </div>
        </div>

      );
    }
  }
   
  
  const mapStateToProps = (state) => {
    console.log("isnide template map state" , state);
    return {
      contactDetails : state.contactDetails,
      educationDetails : state.educationDetails,
      skills : state.skills,
      projects : state.projects,
      skinCode : state.document.skinCode,
      firebaseAuth : state.firebase.auth ,
      firebaseData : state.firestore.data 
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return{
      changeSkinCode : (skinCode) => {  dispatch(updateDocument(skinCode) )},
      updateState : (state) => { dispatch( updateState(state) )}
    }
  }
  
  export default connect(mapStateToProps , mapDispatchToProps )(Templates);