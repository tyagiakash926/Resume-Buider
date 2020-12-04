const { initialState } = require("./intialState");

export const projectReducer = (state = initialState.projects , action) => {
    if(action.type == "UPDATE_PROJECT"){
        return action.projects;
    }
    return state;
};