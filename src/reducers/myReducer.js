// import { initialState } from './intialState';
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
// export function myReducer(state = initialState , action ){
//    if(action.type == "UPDATE_CONTACT"){
//        return{
//            ...state,
//            contactDetails : {...action.contactDetails}
//        }
//    }else if(action.type=="UPDATE_EDUCATION"){
//         return{
//             ...state,
//             educationDetails : {...action.educationDetails}
//         }
//    }
//    else if(action.type == "CHANGE_SKIN"){
//         return{
//             ...state , 
//             document : {...state.document , skinCode : action.skinCode}
//         }
//     }
//     else if(action.type == "UPDATE_SKILL"){
//         return{
//             ...state , 
//             skills : action.skills
//         }
//     }
//     else if(action.type == "UPDATE_PROJECT"){
//         return{
//             ...state , 
//             projects : action.projects
//         }
//     }
//     else if(action.type == "LOGOUT"){
//         return{
//             ...state , 
//             auth : {...state.auth ,  isAuth:false , user :null}
//         }
//     }
//     else if(action.type == "LOGIN"){
//         return{
//             ...state , 
//             auth : {...state.auth ,  isAuth:true , user :action.userDetails}
//         }
//     }
//     return state;
// }

// import { firebaseReducer } from "react-redux-firebase";
// import { firestoreReducer } from "redux-firestore";

const { combineReducers } = require("redux");
const { authReducer } = require("./authReducer");
const { contactReducer } = require("./contactReducer");
const { documentReducer } = require("./documentReducer");
const { educationReducer } = require("./educationReducer");
const { skillReducer } = require("./skillReducer");
const { projectReducer } = require("./projectReducer");



export const myReducer = combineReducers({
    auth : authReducer,
    contactDetails : contactReducer ,
    educationDetails : educationReducer ,
    document : documentReducer,
    skills : skillReducer,
    projects : projectReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer
})