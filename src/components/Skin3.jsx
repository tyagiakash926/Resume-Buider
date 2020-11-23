import React from 'react';
import './Skin3.css';
const Skin3  = (props) => {
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
            
            <div className="contact-details-skin3">
            <div className="contact-details-name-s3">
                <div className="contact-details-logo-s3">{fname.charAt(0)}   {lname.charAt(0)}</div>
            </div>
            <div className="both-name-email-s3">
            <div className="contact-details-fullName-s3"> 
                <div className="contact-details-full-s3">{fname} {lname}</div>
            </div>
            <div className="contact-details-email-phone-s3">
                <div className="contact-details-profession-s3">{profession}</div>
                <div className="contact-details-address-s3">{street} {city} {pin} {state} {country}</div>
                <div className="contact-details-phone-s3">{phone}</div>
                <div className="contact-details-email-s3">{emailpd}</div>
            </div>
            </div>
            </div>

            <div className="professional-summary-skin3">
                <div className="professional-summary-heading-s3">Professional Summary</div>
                <div className="professional-summary-details-s3">{summary}</div>
            </div>

            <div className="Skills-details-skin3">
            <div className="skills-details-heading-s3">Skills</div>
            <div className="skills-details-s3">
                <ul>{AllSkill}</ul>
            </div>
            </div>

            <div className="projects-details-skin3">
            <div className="projects-details-heading-s3">Projects</div>
            <div className="projects-details-s3">
                <ul>{AllProjects}</ul>
            </div>
            </div>

            <div className="education-details-skin3">
            <div className="education-details-heading-s3">Education</div>
            <div className="education-details-s3">
            <div className="education-details-degree-s3">{degree} with GPA : {cgpa}</div>
            <div className="education-details-name-s3">{collegeName} , {educationCity} , {educationState}  {graduationMonth} {graduationYear}</div>
            </div>
            </div>

           



        </React.Fragment>
     );
}
 
export default Skin3;