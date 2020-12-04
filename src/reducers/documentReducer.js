const { initialState } = require("./intialState");

export const documentReducer = (state = initialState.document , action) => {
    if(action.type == "CHANGE_SKIN"){
        return{ 
            ...state , skinCode : action.skinCode
        }
    }
    return state;
};