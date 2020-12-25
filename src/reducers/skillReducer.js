const { initialState } = require("./intialState");

export const skillReducer = (state = initialState.skills , action) => {
    if(action.type == "UPDATE_SKILL"){
        return action.skills
        ;
    }
    else if(action.type=="FAILED_UPDATE_SKILL"){
        console.log(action.error);
        return state;
    }
    return state;
};