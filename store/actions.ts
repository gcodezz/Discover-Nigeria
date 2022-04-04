import AsyncStorage from '@react-native-async-storage/async-storage'

import { foods } from '../data/foods'
import { places } from '../data/places'
import { 
    SetFoodsActionType, 
    SetPlacesActionType,
    ToggleFoodFavActionType
} from './reducers'

export const TOGGLE_FOOD_FAVORITE = 'TOGGLE_FOOD_FAVORITE'
export const TOGGLE_PLACE_FAVORITE = 'TOGGLE_PLACE_FAVORITE'
export const SET_FOODS = 'SET_FOODS'
export const SET_PLACES = 'SET_PLACES'
export const SET_FAV_PLACES = 'SET_FAV_PLACES'

export const toggleFoodFavorite = (id: string): ToggleFoodFavActionType => {
    return {
        type: TOGGLE_FOOD_FAVORITE,
        foodId: id
    }
}

export const togglePlaceFavorite = (id: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: TOGGLE_PLACE_FAVORITE,
            placeId: id
        })
        await editPlaceStorage(id)
    }
}

export const fetchFoods = (): SetFoodsActionType => {
    return {
        type: SET_FOODS,
        foods: foods
    }
}

export const fetchPlaces = (): SetPlacesActionType => {
    return {
        type: SET_PLACES,
        places: places
    }
}

export const fetchFavPlaces = () => {
    return async (dispatch: any) => {
        const favPlacesData = await AsyncStorage.getItem('favPlaces')
        let favPlaces = JSON.parse(favPlacesData)

        let favoritePlaces = []
        for (let id of favPlaces){
            const place = places.find(place => place.id === id)
            favoritePlaces.push(place)
        }
        dispatch({
            type: SET_FAV_PLACES,
            favPlaces: favoritePlaces
        })
    }
}

const editPlaceStorage = async(id: string) => {
    const favPlacesData = await AsyncStorage.getItem('favPlaces')
    let favPlaces = JSON.parse(favPlacesData)
    if (favPlaces.length > 0){
        const existingIndex = favPlaces.findIndex(
            placeId => placeId === id
        )
        if (existingIndex >= 0){
            favPlaces.splice(existingIndex, 1)
        } else {
            favPlaces.push(id)
        }
        AsyncStorage.setItem(
            'favPlaces',
            JSON.stringify(favPlaces)
        )
        // console.log(JSON.parse(await AsyncStorage.getItem('favPlaces')))
    } else {
        AsyncStorage.setItem(
            'favPlaces',
            JSON.stringify([id])
        )
    }
}