import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { TogglePlacesFavActionType } from './types';

const initialState = {
  favPlaces: [],
  availablePlaces: [],
};

const placeSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    fetchPlaces: (state, action) => {
      state.availablePlaces = action.payload;
    },
    togglePlaceFav: (state, action) => {
      console.log(action.payload);
      const existingIndex = state.favPlaces.findIndex((place) => place.id === action.payload);
      if (existingIndex >= 0) {
        const updatedFavPlaces = [...state.favPlaces];
        updatedFavPlaces.splice(existingIndex, 1);
        state.favPlaces = updatedFavPlaces;
      } else {
        const placeFound = state.availablePlaces.find((place) => place.id === action.payload);
        state.favPlaces = state.favPlaces.concat(placeFound);
      }
    },
  },
});

export const { fetchPlaces, togglePlaceFav } = placeSlice.actions;

export const togglePlaceFavorite =
  (id: string) => async (dispatch: Dispatch<TogglePlacesFavActionType>) => {
    dispatch(togglePlaceFav(id));
    await editStorage(id, 'favPlaces');
  };

export const editStorage = async (id: string, cat: string) => {
  const favData = await AsyncStorage.getItem(`${cat}`);
  const favs = JSON.parse(favData);
  console.log(favs);
  if (favs == null) {
    AsyncStorage.setItem(`${cat}`, JSON.stringify([id]));
  } else {
    const existingIndex = favs.findIndex((dataId: string) => dataId === id);
    if (existingIndex >= 0) {
      favs.splice(existingIndex, 1);
    } else {
      favs.push(id);
    }
    AsyncStorage.setItem(`${cat}`, JSON.stringify(favs));
  }
};

export default placeSlice.reducer;
