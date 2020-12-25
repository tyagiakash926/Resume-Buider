export const updateSkills = (skills) =>{

    return(dispatch , getState,{ getFirebase, getFirestore }) =>{
        // async calls
        let db = getFirestore();
        // console.log(getState());
        let uid = getState().firebase.auth.uid;
        db.collection("resumes").doc(uid).set(
            {
            skills: skills,
            },
            { merge: true}
        ).then(()=>{
            dispatch( {type:"UPDATE_SKILL" , skills : skills  }  );    
        })
        .catch(error =>{
            dispatch( {type:"FAILED_UPDATE_SKILL",error : error.message});
        })
            

        
    }
}