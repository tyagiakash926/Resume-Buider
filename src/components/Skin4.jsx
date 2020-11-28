import React from 'react';
import './Skin4.css';
const Skin4  = (props) => {
    let {
        fname,
        lname,
        summary,
        emailpd,
        phone,
        profession,
        street,
        city,
        state,
        country,
        pin,
    }  = props.contact;

    let {cgpa , city:educationCity , state:educationState , degree , collegeName , graduationMonth , graduationYear} = props.education ;
    let skills = props.skills;
    // console.log(props);
    let projects = props.projects;
    // console.log(projects);
    let AllSkill = skills.map((obj) =>
    <li key={obj.skill}>{obj.skill}</li>
    );
    let AllProjects = projects.map((obj) =>
    <li key={obj.projectName}>{obj.projectName} :: {obj.description}</li>
    );
    return( 
        <React.Fragment>
            
        </React.Fragment>
    );
}
export default Skin4;