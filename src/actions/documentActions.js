export const updateDocument = (skinCode) =>{


    return(dispatch , getState) =>{
        // async calls



        dispatch(   {type:"CHANGE_SKIN" , skinCode : skinCode}  );
    } 
}