import React from 'react';
import { enableScreens } from 'react-native-screens';
import { useFonts } from 'expo-font';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';

import modeReducer from './store/modeSlice';
import placeReducer from './store/placeSlice';
import foodReducer from './store/foodSlice';
import StartupScreen from './screens/General/StartupScreen';

enableScreens();

const makeStore = configureStore({
  reducer: {
    foods: foodReducer,
    places: placeReducer,
    isDarkMode: modeReducer,
  },
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default function App() {
  const [loaded] = useFonts({
    KarlaBold: require('./assets/fonts/Karla-Bold.ttf'),
    KarlaMedium: require('./assets/fonts/Karla-Medium.ttf'),
    KarlaRegular: require('./assets/fonts/Karla-Regular.ttf'),
    KarlaLight: require('./assets/fonts/Karla-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ReduxProvider store={makeStore}>
      <StartupScreen />
    </ReduxProvider>
  );
}
