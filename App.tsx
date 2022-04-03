import React, { useMemo, useState } from 'react'
import  { enableScreens } from 'react-native-screens'
import { useFonts } from 'expo-font'
import { Provider as PaperProvider } from 'react-native-paper'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import AppNavigator from './navigation/AppNavigation'
import { Context } from './components/Context/Context'
import { CustomDarkTheme, CustomDefaultTheme } from './themes/themes'
import { foodReducer, placeReducer } from './store/reducers'

enableScreens()

const rootReducer = combineReducers({
  foods: foodReducer,
  places: placeReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

  const context = useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), [])

  const [loaded] = useFonts({
    KarlaBold: require('./assets/fonts/Karla-Bold.ttf'),
    KarlaMedium: require('./assets/fonts/Karla-Medium.ttf'),
    KarlaRegular: require('./assets/fonts/Karla-Regular.ttf'),
    KarlaLight: require('./assets/fonts/Karla-Light.ttf')
  })
  
  if (!loaded) {
    return null
  }
  
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <Context.Provider value={context}>
            <AppNavigator themeValue={theme}/>
        </Context.Provider>
      </Provider>
    </PaperProvider>
  )
}
