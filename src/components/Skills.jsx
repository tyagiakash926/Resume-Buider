import React, { Component } from 'react';
import './Skills.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Preview from '../components/Preview';


class Skills extends Component {
    
    state = {
        contact : this.props.contactDetails,
        education : this.props.educationDetails,
        skills : this.props.skills,
        projects : this.props.projects,
        skinCode : this.props.skinCode
        };

    handleShareholderNameChange = (idx) => (evt) => {
        const newSkill = this.state.skills.map((object, sidx) => {
            if (idx !== sidx) return object;
            return { ...object, skill: evt.target.value };
        });
        
        this.setState({ skills: newSkill });
    }

        
    handleAddShareholder = () => {
        this.setState({ skills: this.state.skills.concat([{ skill: '' }]) });
    }
    
    handleRemoveShareholder = (idx) => () => {
        this.setState({ skills: this.state.skills.filter((s, sidx) => idx !== sidx) });
    }

    onSubmitContactDetails = ()=>{
        // documentId => collection// db me save hojaega
        // navigate to /education
        // history object
        this.props.updateSkills(this.state.skills);

        this.props.history.push("/projects");
    }

    componentWillReceiveProps(newProps){
        this.setState({
            skills : {...newProps.skills}
        })
    }
     
    render() { 
        let {contact , education , skills , projects , skinCode} = this.state;
        return (
            <div className="skills-list">
                 <div className="contact-form">
                 <div className="contact-heading">
                    <h1>SKILLS</h1>
                 </div>
                        {this.state.skills.map((object, idx) => (
                        <div className="shareholder">
                        <input
                            type="text"
                            placeholder={`skill :  ${idx + 1} skill`}
                            value={object.skill}
                            onChange={this.handleShareholderNameChange(idx)}
                        />
                        <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
                        </div>
                    ))}
                    <button type="button" onClick={this.handleAddShareholder} className="small">Add Skill</button>
                    <div className="next full">
                        <button className="btn" onClick={ this.onSubmitContactDetails }>Next</button>
                    </div>
                    <div className="back full">
                        <Link to="/education">
                        <button className="btn">Back</button>
                        </Link>
                    </div>
                 </div>
                 <div className="preview-form">
                        <Preview contact={contact} education={education} skills={skills} projects={projects} skin={skinCode}></Preview>
                    </div>
            </div>
              
            
          )
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
        updateSkills : (skills) => { dispatch( {type:"UPDATE_SKILL" , skills : skills  }  ) },
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Skills);