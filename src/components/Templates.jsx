import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {skinCodes} from '../Constants/skinCodes'

import "./Templates.css";
import { updateDocument } from '../actions/documentActions';

class Templates extends Component {
    state = { 
      skinCode : this.props.skinCode
     }
  
     handleSkinSelect = (skinCode) =>{
      //  console.log(skinCode);
      this.props.changeSkinCode(skinCode);
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
      let {skinCode} = this.state;
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
        </div>

      );
    }
  }
   
  
  const mapStateToProps = (state) => {
    console.log("isnide template map state" , state);
    return {
      skinCode : state.document.skinCode
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return{
      changeSkinCode : (skinCode) => {  dispatch(updateDocument(skinCode) )}
    }
  }
  
  export default connect(mapStateToProps , mapDispatchToProps )(Templates);