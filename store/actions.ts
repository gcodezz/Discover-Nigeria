import { foods } from '../data/foods'
import { places } from '../data/places'
import { 
    SetFoodsActionType, 
    SetPlacesActionType,
    TogglePlacesFavActionType,
    ToggleFoodFavActionType 
} from './reducers'

export const TOGGLE_FOOD_FAVORITE = 'TOGGLE_FOOD_FAVORITE'
export const TOGGLE_PLACE_FAVORITE = 'TOGGLE_PLACE_FAVORITE'
export const SET_FOODS = 'SET_FOODS'
export const SET_PLACES = 'SET_PLACES'

export const toggleFoodFavorite = (id: string): ToggleFoodFavActionType => {
    return {
        type: TOGGLE_FOOD_FAVORITE,
        foodId: id
    }
}

export const togglePlaceFavorite = (id: string): TogglePlacesFavActionType => {
    return {
        type: TOGGLE_PLACE_FAVORITE,
        placeId: id
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