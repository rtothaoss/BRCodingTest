import * as actionTypes from './actionTypes'
import axios from 'axios'

export const addRestaurantData = (restaurantData) => {
    return {
        type: actionTypes.ADD_RESTURANT_DATA,
        restaurantData: restaurantData
    }
}

export const initRestaurantData = () => {
    return dispatch => {
        axios.get('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
            .then(response => {
                dispatch(addRestaurantData(response.data))
            })
            .catch(error => {
                dispatch(console.log(error))
            })
}
}