import React, { Component } from 'react';
import './Contact.css'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Preview from '../components/Preview';
import { updateContact } from '../actions/contactActions';
import { compose } from 'redux';

class Contact extends Component {
    state = { 
        contact:this.props.contactDetails,
        education:this.props.educationDetails,
        skills : this.props.skills,
        projects: this.props.projects,
        skinCode : this.props.skinCode
     }


     onChangeHandler = (e) =>{
        e.preventDefault();
        let id = e.target.id;
        let value = e.target.value;
        
        this.setState({
            contact : { ...this.state.contact , [id] : value}
        })
     }

     onSubmitContactDetails = ()=>{
        // documentId => collection// db me save hojaega
        // navigate to /education
        this.props.updateContactDetails(this.state.contact);
        // history object
        this.props.history.push("/education");
    }

    componentWillReceiveProps(newProps){
        this.setState({
            contact : newProps.contactDetails,
            skinCode :newProps.skinCode,
        })
     }

     componentDidMount(){
        console.log("inside component did mount !!!");
        console.log(this.props);
        // this.setState({
    
        // })
    }



    render() { 
        let {contact , education , skills , projects , skinCode} = this.state;
        return ( 
            <div className="contact">
                <div className="contact-form">
                    <div className="contact-heading">
                        <h1>Personal Details</h1>
                    </div>
                    <div className="contact-form-details">
                        <div className="input-group">
                            <label htmlFor="">First Name</label>
                            <input type="text" id="fname" value={contact.fname}  onChange={ (e) =>{  this.onChangeHandler(e)  }  } />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" id="lname" value={contact.lname}  onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group full">
                            <label htmlFor="">Professional Summary</label>
                            <input type="text" id="summary" value={contact.summary}  onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input type="text" id="emailpd" value={contact.emailpd}  onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Phone</label>
                            <input type="text" id="phone" value={contact.phone}  onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Profession</label>
                            <input type="text" id="profession" value={contact.profession}   onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Street</label>
                            <input type="text" id="street" value={contact.street}  onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">City</label>
                            <input type="text" id="city" value={contact.city}   onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">State</label>
                            <input type="text" id="state" value={contact.state}   onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Country</label>
                            <input type="text" id="country" value={contact.country}   onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Pin Code</label>
                            <input type="text" id="pin" value={contact.pin}   onChange={ (e) =>{  this.onChangeHandler(e)  }  }/>
                        </div>
                        <div className="next full">
                            <button className="btn" onClick={ this.onSubmitContactDetails }>Next</button>
                        </div>
                        <div className="back full">
                            <Link to="/templates">
                            <button className="btn">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="preview-form">
                    <Preview contact={contact}   education = {education} skills={skills} projects={projects} skin={skinCode} ></Preview>
                </div>
            </div>
         );
    }
}


const mapStateToProps = (state) =>{
    console.log(state);
    return{
        contactDetails : state.contactDetails,
        educationDetails : state.educationDetails,
        skills : state.skills,
        projects : state.projects,
        skinCode : state.document.skinCode
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        updateContactDetails : (contactDetails) => { dispatch( updateContact(contactDetails)  ) }
    }
}


export default  compose(connect(mapStateToProps , mapDispatchToProps),  firestoreConnect([ { collection : "resumes" }]))(Contact);