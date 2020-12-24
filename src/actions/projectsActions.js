export const updateProject = (projects) =>{

    return(dispatch , getState) =>{
        // async calls



        dispatch({type:"UPDATE_PROJECT" , projects : projects  });
    }

    
}