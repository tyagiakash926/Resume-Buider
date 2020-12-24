import {initialState} from '../reducers/intialState'


export const login = (userDetails) =>{
    return(dispatch , getState , {getFirebase , getFirestore} ) =>{
        // async calls
        let guid;
        let guser;
        // fire mei user h toh login nhi toh message login failed
        let db = getFirestore(); // db functions 
        let firebase = getFirebase(); // auth functions getFirebase;
        firebase.auth().signInWithEmailAndPassword(userDetails.email ,userDetails.password).then( obj =>{
            guid = obj.user.uid;
            guser = obj.user;
            // check if resume document is already present
            return Promise.all([ db.collection("users").doc(guid).get(),db.collection('resumes').doc(guid).get() ])
        })
        .then(( combineUsersAndResumes  )=>{
            let userDoc = combineUsersAndResumes[0];
            let doc = combineUsersAndResumes[1];
            // console.log(userDoc.data());
            if(!userDoc.data()){
                db.collection("users").doc(guid).set({
                    email:guser.email
                })
            }
            if(!doc.data()){
                // create a template
                db.collection("resumes").doc(guid).set(initialState)
            }
        })
        .then(()=>{
            dispatch(  {type:"LOGIN" , userDetails: userDetails} );
        })
        .catch((err)=>{
            dispatch({type:"LOGIN_FAILED" , error : err.message});
        })        
    } 
}

export const logout = () =>{

    return(dispatch , getState , {getFirebase , getFirestore}) =>{
        // async calls
        
         let firebase = getFirebase();
         firebase.auth().signOut().then(obj => {
             dispatch({type:"LOGOUT"} );
         })
         .catch(err =>{
             dispatch({type:"LOGOUT_FAILED" , error:err.message})
         })



        dispatch( {type:"LOGOUT"} );
    }
}

export const signup = (userDetails)=>{
    return   (dispatch , getState , {getFirebase , getFirestore}) =>{
        console.log(userDetails);
        let firebase = getFirebase();
        let firestore = getFirestore()
       
       
        let uid;
        firebase.auth().createUserWithEmailAndPassword(userDetails.emailregister , userDetails.passwordregister)
        // console.log(user);
        .then(obj =>{
            console.log(obj.user);
            uid = obj.user.uid;
            return firestore.collection("users").doc(obj.user.uid).set({
                email: userDetails.emailregister,
            })
        })
        .then(()=>{
            // console.log(user);
            return firestore.collection("resumes").doc(uid).set({
                ...initialState,
            })
        }).then(()=>{
            console.log("user created succesfully");
            dispatch({type:"SIGNUP"});
        })
        .catch(err=>{
            dispatch({type:"SIGNUP_FAILED" , error : err.message})
        })



    }

}


