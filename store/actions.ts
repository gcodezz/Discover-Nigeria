import AsyncStorage from '@react-native-async-storage/async-storage'

import { foods } from '../data/foods'
import { places } from '../data/places'
import { 
    SetFoodsActionType, 
    SetPlacesActionType
} from './reducers'

export const TOGGLE_FOOD_FAVORITE = 'TOGGLE_FOOD_FAVORITE'
export const TOGGLE_PLACE_FAVORITE = 'TOGGLE_PLACE_FAVORITE'
export const SET_FOODS = 'SET_FOODS'
export const SET_PLACES = 'SET_PLACES'
export const SET_FAV_PLACES = 'SET_FAV_PLACES'
export const SET_FAV_FOODS = 'SET_FAV_FOODS'

export const toggleFoodFavorite = (id: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: TOGGLE_FOOD_FAVORITE,
            foodId: id
        })
        await editStorage(id, 'favFoods')
    }
}

export const togglePlaceFavorite = (id: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: TOGGLE_PLACE_FAVORITE,
            placeId: id
        })
        await editStorage(id, 'favPlaces')
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

export const fetchFavFoods = () => {
    return async (dispatch: any) => {
        const favFoodsData = await AsyncStorage.getItem('favFoods')
        let favFoods = JSON.parse(favFoodsData)
        let favoriteFoods = []
        for (let id of favFoods){
            const food = foods.find(food => food.id === id)
            favoriteFoods.push(food)
        }
        dispatch({
            type: SET_FAV_FOODS,
            favFoods: favoriteFoods
        })
    }
}

const editStorage = async(id: string, cat: string) => {
    const favData = await AsyncStorage.getItem(`${cat}`)
    let favs = JSON.parse(favData)
    if (favs.length > 0){
        const existingIndex = favs.findIndex(
            (dataId: string) => dataId === id
        )
        if (existingIndex >= 0){
            favs.splice(existingIndex, 1)
        } else {
            favs.push(id)
        }
        AsyncStorage.setItem(
            `${cat}`,
            JSON.stringify(favs)
        )
    } else {
        AsyncStorage.setItem(
            `${cat}`,
            JSON.stringify([id])
        )
    }
}