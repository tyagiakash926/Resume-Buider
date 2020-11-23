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
        skinCode : this.props.skinCode
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
                        <Link to="/contact">
                            <button class="template-btn">USE TEMPLATE</button>
                        </Link>
                    </div>
                    <div className="template">
                        <img src={skin2} alt=""/>
                        <Link to="/contact">
                            <button class="template-btn">USE TEMPLATE</button>
                        </Link>
                    </div>
                    <div className="template">
                        <img src={skin3} alt=""/>
                        <Link to="/contact">
                            <button class="template-btn">USE TEMPLATE</button>
                        </Link>
                    </div>
                    <div className="template">
                        <img src={skin4} alt=""/>
                        <Link to="/contact">
                            <button class="template-btn">USE TEMPLATE</button>
                        </Link>
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
 
export default connect(mapStateToProps)(Finalize);