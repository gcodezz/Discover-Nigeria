import React from 'react'
import  { enableScreens } from 'react-native-screens'
import { useFonts } from 'expo-font'
import ReduxThunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import { foodReducer, placeReducer, modeReducer } from './store/reducers'
import StartupScreen from './screens/General/StartupScreen'

enableScreens()

const rootReducer = combineReducers({
  foods: foodReducer,
  places: placeReducer,
  isDarkMode: modeReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
)

export default function App() {

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
        <ReduxProvider store={store}>
          <StartupScreen />
        </ReduxProvider>
  )
}
