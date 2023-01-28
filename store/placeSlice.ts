import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AppThunk } from '../App';
import { places } from '../data/places';
import { SetFavPlacesActionType, TogglePlacesFavActionType } from './types';
import { editStorage } from './helpers';

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
    setFavPlaces: (state, action) => {
      state.favPlaces = action.payload;
    },
  },
});

export const { fetchPlaces, togglePlaceFav, setFavPlaces } = placeSlice.actions;

export const togglePlaceFavorite =
  (id: string): AppThunk =>
  async (dispatch: Dispatch<TogglePlacesFavActionType>) => {
    dispatch(togglePlaceFav(id));
    await editStorage(id, 'favPlaces');
  };

export const fetchPlaceFavs = () => {
  return async (dispatch: Dispatch<SetFavPlacesActionType>) => {
    const favPlacesData = await AsyncStorage.getItem('favPlaces');
    const favPlacesDataJson = JSON.parse(favPlacesData);
    if (favPlacesDataJson == null) {
      return;
    }

    const favoritePlaces = [];
    for (const id of favPlacesDataJson) {
      const favPlace = places.find((place) => place.id === id);
      favoritePlaces.push(favPlace);
    }
    dispatch(setFavPlaces(favoritePlaces));
  };
};

export default placeSlice.reducer;
