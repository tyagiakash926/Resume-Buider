import React from 'react';
import './Skin5.css';
const Skin5  = (props) => {
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
    return ( 
       
        <React.Fragment>
            
            <div className="contact-details-skin5">
            <div className="contact-details-name-s5">
                <div className="contact-details-logo-s5">{fname.charAt(0)}   {lname.charAt(0)}</div>
            </div>
            <div className="both-name-email-s5">
            <div className="contact-details-fullName-s5"> 
                <div className="contact-details-full-s5">{fname} {lname}</div>
            </div>
            <div className="contact-details-email-phone-s5">
                <div className="contact-details-profession-s5">{profession}</div>
                <div className="contact-details-address-s5">{street} {city} {pin} {state} {country}</div>
                <div className="contact-details-phone-s5">{phone}</div>
                <div className="contact-details-email-s5">{emailpd}</div>
            </div>
            </div>
            </div>

            <div className="professional-summary-skin5">
                <div className="professional-summary-heading-s5">Professional Summary</div>
                <div className="professional-summary-details-s5">{summary}</div>
            </div>

            <div className="Skills-details-skin5">
            <div className="skills-details-heading-s5">Skills</div>
            <div className="skills-details-s5">
                <ul>{AllSkill}</ul>
            </div>
            </div>

            <div className="projects-details-skin5">
            <div className="projects-details-heading-s5">Projects</div>
            <div className="projects-details-s5">
                <ul>{AllProjects}</ul>
            </div>
            </div>

            <div className="education-details-skin5">
            <div className="education-details-heading-s5">Education</div>
            <div className="education-details-s5">
            <div className="education-details-degree-s5">{degree} with GPA : {cgpa}</div>
            <div className="education-details-name-s5">{collegeName} , {educationCity} , {educationState}  {graduationMonth} {graduationYear}</div>
            </div>
            </div>

           



        </React.Fragment>
     );
}
 
export default Skin5;