import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.ADD_COUNTER):
        return {
            ...state,
            counter: state.counter + 1
        }
        case(actionTypes.SUB_COUNTER):
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

export default reducer;