const { initialState } = require("./intialState");

export const contactReducer = (state = initialState.contactDetails , action) => {
    if(action.type == "UPDATE_CONTACT"){
        // console.log("from contact reducer",action.contactDetails);
        return {
            ...action.contactDetails,
        };
    }
    else if(action.type == "FAILED_UPDATE_CONTACT"){
        console.log(action.error);
        return state
    }
    return state;
};