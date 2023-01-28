import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { AppThunk } from '../App';
import { foods } from '../data/foods';
import { editStorage } from './helpers';
import { SetFavFoodsActionType, ToggleFoodFavActionType } from './types';

const initialState = {
  favFoods: [],
  availableFoods: [],
};

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    fetchFoods: (state, action) => {
      state.availableFoods = action.payload;
    },
    toggleFoodFav: (state, action) => {
      const existingIndex = state.favFoods.findIndex((food) => food.id === action.payload);
      if (existingIndex >= 0) {
        const updatedFavFoods = [...state.favFoods];
        updatedFavFoods.splice(existingIndex, 1);
        state.favFoods = updatedFavFoods;
      } else {
        const foodFound = state.availableFoods.find((food) => food.id === action.payload);
        state.favFoods = state.favFoods.concat(foodFound);
      }
    },
    setFavFoods: (state, action) => {
      state.favFoods = action.payload;
    },
  },
});

export const { fetchFoods, toggleFoodFav, setFavFoods } = foodSlice.actions;

export const toggleFoodFavorite =
  (id: string): AppThunk =>
  async (dispatch: Dispatch<ToggleFoodFavActionType>) => {
    dispatch(toggleFoodFav(id));
    await editStorage(id, 'favFoods');
  };

export const fetchFoodFavs = () => {
  return async (dispatch: Dispatch<SetFavFoodsActionType>) => {
    const favFoodData = await AsyncStorage.getItem('favFoods');
    const favFoodDataJson = JSON.parse(favFoodData);
    if (favFoodDataJson == null) {
      return;
    }

    const favoriteFoods = [];
    for (const id of favFoodDataJson) {
      const favFood = foods.find((food) => food.id === id);
      favoriteFoods.push(favFood);
    }
    dispatch(setFavFoods(favoriteFoods));
  };
};

export default foodSlice.reducer;
