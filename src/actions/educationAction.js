export const updateEductaion = (educationDetails) =>{

    return(dispatch , getState , {getFirebase , getFirestore}) =>{
        // async calls
        let db = getFirestore();
        // console.log("hiiiiiiiiiiiiiiiiiii");
        // console.log(getState());
        let uid = getState().firebase.auth.uid;
        db.collection("resumes").doc(uid).set(
            {
                educationDetails: educationDetails,
            },
            { merge: true }
          ).then(()=>{
            dispatch(  {type:"UPDATE_EDUCATION" , educationDetails:educationDetails}  );
          })
          .catch(err =>{
              dispatch({ type: "FAILED_UPDATE_EDUCATION", error : err.message });
          })




        
    }
}