import { Food } from '../data/foods';
import { Place } from '../data/places';

export interface ToggleFoodFavActionType {
  type: 'foods/toggleFoodFav';
  payload: string;
}

export interface SetFavFoodsActionType {
  type: 'foods/setFavFoods';
  payload: Food[] | Place[];
}

export type FoodActionTypes = ToggleFoodFavActionType | SetFavFoodsActionType;

export interface TogglePlacesFavActionType {
  type: 'places/togglePlaceFav';
  payload: string;
}

export interface SetFavPlacesActionType {
  type: 'places/setFavPlaces';
  payload: Place[] | Food[];
}

export type PlaceActionTypes = TogglePlacesFavActionType | SetFavPlacesActionType;

export interface SetModeActionType {
  type: 'mode/fetchMode';
  payload: boolean;
}

export type ModeActionTypes = SetModeActionType;
