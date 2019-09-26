import * as actionTypes from './actionTypes'

export const addRestaurantData = (restData) => {
    return {
        type: actionTypes.ADD_RESTURANT_DATA,
        restaurantData: restData
    }
}