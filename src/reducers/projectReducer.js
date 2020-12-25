const { initialState } = require("./intialState");

export const projectReducer = (state = initialState.projects , action) => {
    if(action.type == "UPDATE_PROJECT"){
        return action.projects;
    }else if (action.type == "FAILED_UPDATE_PROJECT"){
        console.log(action.error);
        return state;
    }
    return state;
};