export const updateDocument = (skinCode) =>{


    return(dispatch , getState, { getFirebase, getFirestore }) =>{
        // async calls
        let db = getFirestore();
        // console.log(getState());
        let uid = getState().firebase.auth.uid;
        // let document = {skinCode:skinCode};
        db.collection("resumes").doc(uid).set(
           {
            document: {skinCode:skinCode},
           },
           { merge: true }
         ).then(()=>{
            dispatch(   {type:"CHANGE_SKIN" , skinCode : skinCode} );
         })
         .catch(err =>{
             dispatch({ type: "FAILED_CHANGE_SKIN", error : err.message });
         })


         
    } 
}