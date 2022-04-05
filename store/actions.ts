import AsyncStorage from '@react-native-async-storage/async-storage'

import { foods } from '../data/foods'
import { places } from '../data/places'
import { SetFoodsActionType, SetPlacesActionType } from './types'

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

export const fetchFavs = (cat: string) => {
    return async (dispatch: any) => {
        const favData = await AsyncStorage.getItem(`${cat}`)
        let favPlacesOrFoods = JSON.parse(favData)
        if (favPlacesOrFoods == null){
            return
        }

        let favoritePlacesOrFoods = []
        let dataToBeSearch = []
        if (cat == 'favFoods'){
            dataToBeSearch = foods
        } else {
            dataToBeSearch = places
        }
        for (let id of favPlacesOrFoods){
            const placeOrFood = dataToBeSearch.find(placeOrFood => placeOrFood.id === id)
            favoritePlacesOrFoods.push(placeOrFood)
        }
        if (cat == 'favFoods'){
            dispatch({
                type: SET_FAV_FOODS,
                favData: favoritePlacesOrFoods
            })
        } else {
            dispatch({
                type: SET_FAV_PLACES,
                favData: favoritePlacesOrFoods
            })
        }
    }
}

const editStorage = async(id: string, cat: string) => {
    const favData = await AsyncStorage.getItem(`${cat}`)
    let favs = JSON.parse(favData)
    if (favs == null) {
        AsyncStorage.setItem(
            `${cat}`,
            JSON.stringify([id])
        )
    } else {
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
    }
}