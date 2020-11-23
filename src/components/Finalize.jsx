import React, { Component } from 'react';
import './Finalize.css';
import { connect } from 'react-redux';
import Preview from './Preview';
import skin1 from "../static/images/skin1.svg";
import skin2 from "../static/images/skin2.svg";
import skin3 from "../static/images/skin3.svg";
import skin4 from "../static/images/skin4.svg";
import { Link } from "react-router-dom";


class Finalize extends Component {
    state = { 
        contact : this.props.contactDetails,
        education : this.props.educationDetails,
        skills : this.props.skills,
        projects: this.props.projects,
        skinCode : this.props.skinCode,
    }

    handleSkinSelect = (skinCode) =>{
        //  console.log(skinCode);
        this.props.changeSkinCode(skinCode);
        // this.props.history.push("/contact");
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
        console.log(this.props);
        let {contact , education , skills , projects , skinCode } = this.state;
        return ( 
            <React.Fragment>
                <div className="finalize">
                    <div className="final-preview">
                        <Preview contact={contact} education={education} skills={skills} projects={projects} skin={skinCode}></Preview>
                    </div>
                    <div className="final-templates">
                    <div className="template">
                        <img src={skin1} alt=""/>
                            <button class="template-btn" onClick = { ()=> {this.handleSkinSelect("skin1")} }>USE TEMPLATE</button>
                    </div>
                    <div className="template">
                        <img src={skin2} alt=""/>
                            <button class="template-btn" onClick = { ()=> {this.handleSkinSelect("skin2")} }>USE TEMPLATE</button>
                    </div>
                    <div className="template">
                        <img src={skin3} alt=""/>
                            <button class="template-btn" onClick = { ()=> {this.handleSkinSelect("skin3")} }>USE TEMPLATE</button>
                    </div>
                    <div className="template">
                        <img src={skin4} alt=""/>
                            <button class="template-btn" onClick = { ()=> {this.handleSkinSelect("skin4")} }>USE TEMPLATE</button>
                    </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

const mapStateToProps = (state) =>{
    return {
        contactDetails : state.contactDetails,
        educationDetails : state.educationDetails,
        skills : state.skills,
        projects : state.projects,
        skinCode : state.document.skinCode
    }
    }

    const mapDispatchToProps = (dispatch) =>{
        return{
            changeSkinCode : (skinCode) => {  dispatch( {type:"CHANGE_SKIN" , skinCode : skinCode} )}
        }
    }
    
 
export default connect(mapStateToProps , mapDispatchToProps)(Finalize);