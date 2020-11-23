import React from 'react';
import Skin1 from './Skin1';
import Skin2 from './Skin2';
const Preview = (props) => {
  console.log(props);
  let selectedSkin= props.skin;
  console.log(selectedSkin);
    return ( 
        <React.Fragment>
          {selectedSkin=="skin1" && <Skin1 contact={props.contact} education={props.education} skills={props.skills} projects={props.projects}></Skin1>}
          {selectedSkin=="skin2" && <Skin2 contact={props.contact} education={props.education} skills={props.skills} projects={props.projects}></Skin2>}
        </React.Fragment>
     );
}
 
export default Preview;