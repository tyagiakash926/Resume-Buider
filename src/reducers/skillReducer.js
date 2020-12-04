const { initialState } = require("./intialState");

export const skillReducer = (state = initialState.skills , action) => {
    if(action.type == "UPDATE_SKILL"){
        return action.skills
        ;
    }
    return state;
};