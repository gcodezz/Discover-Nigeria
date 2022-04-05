import { 
    TOGGLE_PLACE_FAVORITE, 
    SET_FOODS, 
    SET_PLACES,
    TOGGLE_FOOD_FAVORITE,
    SET_FAV_FOODS,
    SET_FAV_PLACES
} from './actions'
import { Food } from '../data/foods'
import { Place } from '../data/places'

const initialFoodState = {
    favFoods: [],
    availableFoods: []
}

const initialPlaceState = {
    favPlaces: [],
    availablePlaces: []
}

export interface SetFoodsActionType {
    type: typeof SET_FOODS
    foods: Food[]
}

export interface ToggleFoodFavActionType {
    type: typeof TOGGLE_FOOD_FAVORITE
    foodId: string
}

export interface SetFavFoodsActionType {
    type: typeof SET_FAV_FOODS,
    favData: Food[] | Place[]
}

type FoodActionTypes = SetFoodsActionType | ToggleFoodFavActionType | SetFavFoodsActionType

export const foodReducer = (state = initialFoodState, action: FoodActionTypes) => {
    switch (action.type) {
        case SET_FOODS:
            return {
                ...state,
                availableFoods: action.foods
            }
        case TOGGLE_FOOD_FAVORITE:
            const existingIndex = state.favFoods.findIndex(
                food => food.id === action.foodId
            )
            if (existingIndex >= 0){
                const updatedFavFoods = [...state.favFoods]
                updatedFavFoods.splice(existingIndex, 1)
                return {
                    ...state,
                    favFoods: updatedFavFoods
                }
            } else {
                const food = state.availableFoods.find(
                    food => food.id === action.foodId
                )
                return {
                    ...state,
                    favFoods: state.favFoods.concat(food)
                }
            }
        case SET_FAV_FOODS:
            return {
                ...state,
                favFoods: action.favData
            }
        default: 
            return state
    }
}

export interface SetPlacesActionType {
    type: typeof SET_PLACES
    places: Place[]
}

export interface TogglePlacesFavActionType {
    type: typeof TOGGLE_PLACE_FAVORITE
    placeId: string
}

export interface SetFavPlacesActionType {
    type: typeof SET_FAV_PLACES,
    favData: Place[] | Food[]
}

type PlaceActionTypes = SetPlacesActionType | TogglePlacesFavActionType | SetFavPlacesActionType

export const placeReducer = (state = initialPlaceState, action: PlaceActionTypes) => {
    switch (action.type) {
        case SET_PLACES:
            return {
                ...state,
                availablePlaces: action.places
            }
        case TOGGLE_PLACE_FAVORITE:
            const existingIndex = state.favPlaces.findIndex(
                place => place.id === action.placeId
            )
            if (existingIndex >= 0){
                const updatedFavPlaces = [...state.favPlaces]
                updatedFavPlaces.splice(existingIndex, 1)
                return {
                    ...state,
                    favPlaces: updatedFavPlaces
                }
            } else {
                const place = state.availablePlaces.find(
                    place => place.id === action.placeId
                )
                return {
                    ...state,
                    favPlaces: state.favPlaces.concat(place)
                }
            }
        case SET_FAV_PLACES:
            return {
                ...state,
                favPlaces: action.favData
            }
        default: 
            return state
    }
}