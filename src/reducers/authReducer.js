const { initialState } = require("./intialState");

export const authReducer = (state = initialState.auth , action) => {
    if(action.type == "LOGOUT") {
        return {
            isAuth: false,
            user: null,
        }
    }
    else if(action.type == "LOGIN") {
      // console.log("login reducers");
        return {
            isAuth : true,
            user: action.userDetails
        }
    }
    else if(action.type == "LOGIN_FAILED"){
        return{
          ...state ,
          message : action.error
        }
      }

    else if(action.tyoe == "LOGOUT_FAILED"){
        console.log(action.error);
        return state;
    }
    else if(action.type == "SIGNUP_FAILED"){
        return{
          ...state ,
          message : action.error,
        }
      }
    else if(action.type =="SIGNUP"){
        return state;
      }
    return state;
}