import React, { Component } from 'react'
import Preview from './Preview';
import "./Education.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Education extends Component {
    state = { 
        contact : this.props.contactDetails,
        education : this.props.educationDetails,
        skills : this.props.skills,
        projects: this.props.projects
     }
     onChangeHandler = (e) =>{
        e.preventDefault();
        let key = e.target.id;
        let value = e.target.value;

        this.setState({
            education : {...this.state.education , [key]:value } 
        })
    }

    onSubmitContactDetails = ()=>{
        // documentId => collection// db me save hojaega
        // navigate to /education
        this.props.updateEducationDetails(this.state.education);
        // history object
        this.props.history.push("/skills");
    }

    componentWillReceiveProps(newProps){
        this.setState({
            education : {...newProps.educationDetails}
        })
    }

    render() { 
        let {contact , education , skills , projects} = this.state;
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
                        <button className="btn" onClick={ this.onSubmitContactDetails }>Next</button>
                    </div>
                    <div className="back full">
                        <Link to="/contact">
                        <button className="btn">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
           
            <div className="preview-form">
                <Preview contact={contact} education={education}  skills={skills} projects={projects}></Preview>
            </div>
        </div>
     );
}
}


const mapStateToProps = (state) =>{
return {
    contactDetails : state.contactDetails,
    educationDetails : state.educationDetails,
    skills : state.skills,
    projects: state.projects
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEducationDetails : (educationDetails) =>{dispatch({type:"UPDATE_EDUCATION" , educationDetails:educationDetails})}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Education);