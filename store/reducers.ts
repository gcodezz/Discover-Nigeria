import {
  TOGGLE_PLACE_FAVORITE,
  SET_FOODS,
  SET_PLACES,
  TOGGLE_FOOD_FAVORITE,
  SET_FAV_FOODS,
  SET_FAV_PLACES,
  TOGGLE_MODE,
  SET_MODE,
} from './actions';

import { PlaceActionTypes, FoodActionTypes, ModeActionTypes } from './types';

const initialFoodState = {
  favFoods: [],
  availableFoods: [],
};

export const foodReducer = (action: FoodActionTypes, state = initialFoodState) => {
  switch (action.type) {
    case SET_FOODS:
      return {
        ...state,
        availableFoods: action.foods,
      };
    case TOGGLE_FOOD_FAVORITE:
      const existingIndex = state.favFoods.findIndex((food) => food.id === action.foodId);
      if (existingIndex >= 0) {
        const updatedFavFoods = [...state.favFoods];
        updatedFavFoods.splice(existingIndex, 1);
        return {
          ...state,
          favFoods: updatedFavFoods,
        };
      } else {
        const foodFound = state.availableFoods.find((food) => food.id === action.foodId);
        return {
          ...state,
          favFoods: state.favFoods.concat(foodFound),
        };
      }
    case SET_FAV_FOODS:
      return {
        ...state,
        favFoods: action.favData,
      };
    default:
      return state;
  }
};

const initialPlaceState = {
  favPlaces: [],
  availablePlaces: [],
};

export const placeReducer = (action: PlaceActionTypes, state = initialPlaceState) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        availablePlaces: action.places,
      };
    case TOGGLE_PLACE_FAVORITE:
      const existingIndex = state.favPlaces.findIndex((place) => place.id === action.placeId);
      if (existingIndex >= 0) {
        const updatedFavPlaces = [...state.favPlaces];
        updatedFavPlaces.splice(existingIndex, 1);
        return {
          ...state,
          favPlaces: updatedFavPlaces,
        };
      } else {
        const placeFound = state.availablePlaces.find((place) => place.id === action.placeId);
        return {
          ...state,
          favPlaces: state.favPlaces.concat(placeFound),
        };
      }
    case SET_FAV_PLACES:
      return {
        ...state,
        favPlaces: action.favData,
      };
    default:
      return state;
  }
};

export const initialModeState = {
  isDarkMode: false,
};

export const modeReducer = (action: ModeActionTypes, state = initialModeState) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case SET_MODE:
      return {
        ...state,
        isDarkMode: action.mode,
      };
    default:
      return state;
  }
};
