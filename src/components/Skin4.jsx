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
            <div className="contact-details-skin4">
                <div className="full-name-s4">{fname} {lname} </div>
                <div className="full-address">{street} {city} {state} {country} {emailpd} {phone}</div>
                <div className="profession-s4">{profession}</div>
            </div>

            <div className="professional-summary-skin4">
                <div className="professional-summary-heading-s4">PROFESSIONAL SUMMARY</div>
                <div className="professional-summary-details-s4">{summary}</div>
            </div>

            <div className="Skills-details-skin4">
            <div className="skills-details-heading-s4">Skills</div>
            <div className="skills-details-s4">
                <ul>{AllSkill}</ul>
            </div>
            </div>

            <div className="projects-details-skin4">
            <div className="projects-details-heading-s4">Projects</div>
            <div className="projects-details-s4">
                <ul>{AllProjects}</ul>
            </div>
            </div>

            <div className="education-details-skin4">
            <div className="education-details-heading-s4">Education</div>
            <div className="education-details-s4">
            <div className="education-details-degree-s4">{degree} with GPA : {cgpa}</div>
            <div className="education-details-name-s4">{collegeName} , {educationCity} , {educationState}  {graduationMonth} {graduationYear}</div>
            </div>
            </div>


        </React.Fragment>
    );
}
export default Skin4;