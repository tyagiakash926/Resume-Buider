export const updateContact = (contactDetails) =>{

   return(dispatch , getState) =>{
      // async calls



      dispatch(  {type:"UPDATE_CONTACT" , contactDetails : contactDetails  }  );
  } 
  
}