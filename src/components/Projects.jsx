import React, { Component } from 'react';
import './Projects.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Preview from '../components/Preview';
import { updateProject } from '../actions/projectsActions';

class Projects extends Component {
    state = {
        contact : this.props.contactDetails,
        education : this.props.educationDetails,
        skills : this.props.skills,
        projects: this.props.projects,
        skinCode : this.props.skinCode
        };

     handleShareholderNameChange = (idx) => (evt) => {
        const newSkill = this.state.projects.map((object, sidx) => {
            if (idx !== sidx) return object;
            return { ...object, projectName: evt.target.value };
        });
        
        this.setState({ projects: newSkill });
    }

    handleShareholderDescriptionChange = (idx) => (evt) => {
        const newDescription = this.state.projects.map((object , sidx ) => {
            if ( idx !== sidx ) return object;
            return { ...object , description: evt.target.value };
        });
        this.setState({projects:newDescription});
    }

        
    handleAddShareholder = () => {
        this.setState({ projects: this.state.projects.concat([{ projectName: '' , description: ''}]) });
    }
    
    handleRemoveShareholder = (idx) => () => {
        this.setState({ projects: this.state.projects.filter((s, sidx) => idx !== sidx) });
    }

    onSubmitContactDetails = ()=>{
        // documentId => collection// db me save hojaega
        // navigate to /education
        // history object
        console.log(this.state.projects);
        this.props.updateProjects(this.state.projects);

        this.props.history.push("/finalize");
    }

    componentWillReceiveProps(newProps){
        this.setState({
            projects : newProps.projects
        })
    }


     render() { 
        let {contact , education , skills , projects , skinCode} = this.state;
        contact = this.props.contactDetails;
        education=this.props.educationDetails;
        skills = this.props.skills;
        // projects=this.props.projects;
        skinCode =this.props.skinCode;
        return (
            <div className="skills-list">
                 <div className="contact-form">
                 <div className="contact-heading">
                    <h1>PROJECTS</h1>
                 </div>
                        {this.state.projects.map((object, idx) => (
                        <div className="shareholder">
                        <input
                            type="text"
                            placeholder={`projectName :  ${idx + 1} projectName`}
                            value={object.projectName}
                            onChange={this.handleShareholderNameChange(idx)}
                        />
                        <input
                            type="text"
                            placeholder={`description :  ${idx + 1} description`}
                            value={object.description}
                            onChange={this.handleShareholderDescriptionChange(idx)}
                        />
                        <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
                        </div>
                    ))}
                    <button type="button" onClick={this.handleAddShareholder} className="small">Add Project</button>
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
        updateProjects : (projects) => { dispatch( updateProject(projects)  ) },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects);