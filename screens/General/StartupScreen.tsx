import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppNavigator from '../../navigation/AppNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { fetchFoods } from '../../store/foodSlice';
import { fetchPlaces } from '../../store/placeSlice';
import { getModeFromStorage } from '../../store/modeSlice';
import { CustomDarkTheme, CustomDefaultTheme } from '../../themes/themes';
import { foods } from '../../data/foods';
import { places } from '../../data/places';

const StartupScreen = () => {
  const isDarkMode: boolean = useSelector((state: any) => state.isDarkMode.isDarkMode);
  const themeValue = isDarkMode ? CustomDarkTheme : CustomDefaultTheme;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods(foods));
    dispatch(fetchPlaces(places));
    dispatch(getModeFromStorage());
  }, [dispatch]);

  return (
    <PaperProvider theme={themeValue}>
      <NavigationContainer theme={themeValue}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default StartupScreen;
