import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    restaurantData: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case actionTypes.ADD_RESTURANT_DATA:
            return{
                ...state,
                restaurantData: action.restaurantData,
            }
            default:
                return state
    } 
}

export default reducer