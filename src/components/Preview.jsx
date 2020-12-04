import React from 'react';
import Skin1 from './Skin1';
import Skin2 from './Skin2';
import Skin3 from './Skin3';
import Skin4 from './Skin4';
import Skin5 from './Skin5';

const Preview = (props) => {
  console.log(props);
  console.log(props.skills);
  let selectedSkin= props.skin;
  console.log(selectedSkin);
    return ( 
        <React.Fragment>
          {selectedSkin=="skin1" && <Skin1 contact={props.contact} education={props.education} skills={props.skills} projects={props.projects}></Skin1>}
          {selectedSkin=="skin2" && <Skin2 contact={props.contact} education={props.education} skills={props.skills} projects={props.projects}></Skin2>}
          {selectedSkin=="skin3" && <Skin3 contact={props.contact} education={props.education} skills={props.skills} projects={props.projects}></Skin3>}
          {selectedSkin=="skin4" && <Skin4 contact={props.contact} education={props.education} skills={props.skills} projects={props.projects}></Skin4>}
          {selectedSkin=="skin5" && <Skin5 contact={props.contact} education={props.education} skills={props.skills} projects={props.projects}></Skin5>}
        </React.Fragment>
     );
}
 
export default Preview;