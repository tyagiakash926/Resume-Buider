import React, { Component } from 'react'
import Preview from './Preview';
import "./Education.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateEductaion } from '../actions/educationAction';

class Education extends Component {
    state = { 
        contact : this.props.contactDetails,
        education : this.props.educationDetails,
        skills : this.props.skills,
        projects: this.props.projects,
        skinCode : this.props.skinCode
     }
     onChangeHandler = (e) =>{
        e.preventDefault();
        let key = e.target.id;
        let value = e.target.value;
        this.setState({
            education : {...this.state.education , [key]:value } 
        })
    }

    onSubmitEducationalDetails = (e)=>{
        // documentId => collection// db me save hojaega
        // navigate to /education
        console.log("on Submit before");
        this.props.updateEducationDetails(this.state.education);
        console.log("on Submit after");
        // history object
        this.props.history.push("/skills");
    }

    componentWillReceiveProps(newProps){
        this.setState({
            education : {...newProps.educationDetails}
        })
    }

    render() { 
        let {contact , education , skills , projects , skinCode} = this.state;
        contact = this.props.contactDetails;
        // education=this.props.educationDetails;
        skills = this.props.skills;
        projects=this.props.projects;
        skinCode =this.props.skinCode;
        return ( 
            <div className="contact">
            <div className="contact-form">
            <div className="contact-heading">
                    <h1>Education Details</h1>
                </div>
            <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">College Name</label>
                        <input type="text" id="collegeName" value={education.collegeName} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Degree</label>
                        <input type="text" id="degree" value={education.degree} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">CGPA</label>
                        <input type="text" id="cgpa" value={education.cgpa} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">City</label>
                        <input type="text" id="city" value={education.city} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">State</label>
                        <input type="text" id="state" value={education.state} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Graduation Month</label>
                        <input type="text" id="graduationMonth" value={education.graduationMonth} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                    </div>
                    <div className="input-group full">
                        <label htmlFor="">Graduation Year</label>
                        <input type="text" id="graduationYear" value={education.graduationYear} onChange={ (e) =>{  this.onChangeHandler(e)  }   }/>
                    </div>
                    <div className="next full">
                        <button className="btn" onClick={ (e)=>{this.onSubmitEducationalDetails(e)} }>Next</button>
                    </div>
                    <div className="back full">
                        <Link to="/contact">
                        <button className="btn">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
           
            <div className="preview-form">
                <Preview contact={contact} education={education}  skills={skills} projects={projects} skin={skinCode}></Preview>
            </div>
        </div>
     );
}
}


const mapStateToProps = (state) =>{
    console.log("state in education props" , state);
return {
    contactDetails : state.contactDetails,
    educationDetails : state.educationDetails,
    skills : state.skills,
    projects: state.projects,
    skinCode : state.document.skinCode,
    firebaseData : state.firestore.data
}
}

const mapDispatchToProps = (dispatch) => {
    return { 
    // {dispatch(updateEductaion(educationDetails))}
        updateEducationDetails : (educationDetails) =>  { dispatch( updateEductaion(educationDetails)  ) }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Education);