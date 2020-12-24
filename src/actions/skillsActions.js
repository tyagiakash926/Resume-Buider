export const updateSkills = (skills) =>{

    return(dispatch , getState) =>{
        // async calls



        dispatch( {type:"UPDATE_SKILL" , skills : skills  }  );
    }
}