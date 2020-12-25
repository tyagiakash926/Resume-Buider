import React, { Component } from 'react';
import './Finalize.css';
import { connect } from 'react-redux';
import {skinCodes} from '../Constants/skinCodes'
import Preview from './Preview';
import { updateDocument } from '../actions/documentActions';
import Pdf from 'react-to-pdf'



class Finalize extends Component {
    state = { 
        contact : this.props.contactDetails,
        education : this.props.educationDetails,
        skills : this.props.skills,
        projects: this.props.projects,
        skinCode : this.props.skinCode,
    }

    handleSkinSelect = (skinCode) =>{
        //  console.log(skinCode);
        this.props.changeSkinCode(skinCode);
        // this.props.history.push("/contact");
       }

       componentDidMount(){
        console.log("inside mount" , this.props.skinCode);
      }

      componentWillReceiveProps(newProps){
        console.log(newProps);
        this.setState({
          skinCode : newProps.skinCode
        })
        }

    render() { 
        const ref = React.createRef();
        console.log(this.props);
        let {contact , education , skills , projects , skinCode } = this.state;
        return ( 
            <React.Fragment>
                <div className="finalize">
                    
                        <div className="final-preview"  ref={ref}>
                            <Preview contact={contact} education={education} skills={skills} projects={projects} skin={skinCode}></Preview>
                        </div>
                        <div className="download-btn">
                            <Pdf targetRef={ref} filename="resume.pdf"  scale={1.1}>
                                {({ toPdf }) => (
                                <button className="btn" onClick={toPdf}>Generate pdf</button>
                                )}
                            </Pdf>
                        </div>
        
                    
                    <div className="final-templates">
                    {skinCodes.map(  ( skin ) => {
                    let className = skin.value == skinCode ? "selected-skin" : "";
                    return <div key = {skin.id} className={`template ${className}`} >
              <img src= {`/images/${skin.value}.svg`} alt="" />
              {skin.value == skinCode?<i class="fa fa-check-circle" aria-hidden="true" onClick = { ()=> {this.handleSkinSelect(skin.value)} }></i>:<button class="template-btn" onClick = { ()=> {this.handleSkinSelect(skin.value)} }>USE TEMPLATE</button>}
              
            </div>
        })}


                    {/* <div className="template">
                        <img src={skin1} alt=""/>
                            <button class="template-btn" onClick = { ()=> {this.handleSkinSelect("skin1")} }>USE TEMPLATE</button>
                    </div>
                    <div className="template">
                        <img src={skin2} alt=""/>
                            <button class="template-btn" onClick = { ()=> {this.handleSkinSelect("skin2")} }>USE TEMPLATE</button>
                    </div>
                    <div className="template">
                        <img src={skin3} alt=""/>
                            <button class="template-btn" onClick = { ()=> {this.handleSkinSelect("skin3")} }>USE TEMPLATE</button>
                    </div>
                    <div className="template">
                        <img src={skin4} alt=""/>
                            <button class="template-btn" onClick = { ()=> {this.handleSkinSelect("skin4")} }>USE TEMPLATE</button>
                    </div> */}
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

    const mapDispatchToProps = (dispatch) =>{
        return{
            changeSkinCode : (skinCode) => {  dispatch(updateDocument(skinCode) )}
        }
    }
    
 
export default connect(mapStateToProps , mapDispatchToProps)(Finalize);