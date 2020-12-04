const { initialState } = require("./intialState");

export const educationReducer = (state = initialState.educationDetails , action) => {
    if(action.type == "UPDATE_EDUCATION"){
        return {
            ...action.educationDetails,
        };
    }
    return state;
};