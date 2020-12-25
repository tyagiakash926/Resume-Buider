export const updateProject = (projects) =>{

    return(dispatch , getState, { getFirebase, getFirestore }) =>{
        // async calls
        let db = getFirestore();
        // console.log(getState());
        let uid = getState().firebase.auth.uid;
        db.collection("resumes").doc(uid).set(
           {
             projects: projects,
           },
           { merge: true }
         ).then(()=>{
            dispatch({type:"UPDATE_PROJECT" , projects : projects  });
         })
         .catch(err =>{
             dispatch({ type: "FAILED_UPDATE_PROJECT", error : err.message });
         })


       
    }

    
}