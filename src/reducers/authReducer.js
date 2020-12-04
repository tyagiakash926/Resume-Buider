const { initialState } = require("./intialState");

export const authReducer = (state = initialState.auth , action) => {
    if(action.type == "LOGOUT") {
        return {
            isAuth: false,
            user: null,
        }
    }
    else if(action.type == "LOGIN") {
        return {
            isAuth : true,
            user: action.userDetails
        }
    }
    return state;
}