import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.ADD_COUNTER
    }
}

export const decrement = () => {
    return {
        type: actionTypes.SUB_COUNTER
    }
}