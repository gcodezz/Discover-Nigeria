import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { SetModeActionType } from './types';

const initialState = {
  isDarkMode: false,
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    fetchMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    toggleMode: (state) => {
      const currMode = state.isDarkMode;
      state.isDarkMode = !currMode;
      AsyncStorage.setItem('mode', JSON.stringify(!currMode));
    },
  },
});

export const { fetchMode, toggleMode } = modeSlice.actions;

export const getModeFromStorage = () => async (dispatch: Dispatch<SetModeActionType>) => {
  const modeData = await AsyncStorage.getItem('mode');
  const mode = JSON.parse(modeData);
  if (mode == null) {
    return;
  }
  dispatch(fetchMode(mode));
};

export default modeSlice.reducer;
