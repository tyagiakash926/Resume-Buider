import React from 'react';
import Skin1 from './Skin1';
const Preview = (props) => {
    return ( 
        <React.Fragment>
          <Skin1 contact={props.contact} education={props.education} skills={props.skills} projects={props.projects}></Skin1>
        </React.Fragment>
     );
}
 
export default Preview;