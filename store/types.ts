import { Food } from '../data/foods';
import { Place } from '../data/places';

import {
  TOGGLE_PLACE_FAVORITE,
  SET_FOODS,
  SET_PLACES,
  TOGGLE_FOOD_FAVORITE,
  SET_FAV_FOODS,
  SET_FAV_PLACES,
  TOGGLE_MODE,
} from './actions';

export interface SetFoodsActionType {
  type: typeof SET_FOODS;
  foods: Food[];
}

export interface ToggleFoodFavActionType {
  type: 'places/togglePlaceFav';
  payload: string;
}

export interface SetFavFoodsActionType {
  type: typeof SET_FAV_FOODS;
  favData: Food[] | Place[];
}

export type FoodActionTypes = SetFoodsActionType | ToggleFoodFavActionType | SetFavFoodsActionType;

export interface SetPlacesActionType {
  type: typeof SET_PLACES;
  places: Place[];
}

export interface ToggleModeActionType {
  type: typeof TOGGLE_MODE;
}

export interface TogglePlacesFavActionType {
  type: 'places/togglePlaceFav';
  payload: string;
}

export interface SetFavPlacesActionType {
  type: typeof SET_FAV_PLACES;
  favData: Place[] | Food[];
}

export type PlaceActionTypes =
  | SetPlacesActionType
  | TogglePlacesFavActionType
  | SetFavPlacesActionType;

export interface SetModeActionType {
  type: 'mode/fetchMode';
  payload: boolean;
}

export type ModeActionTypes = SetModeActionType | ToggleModeActionType;
