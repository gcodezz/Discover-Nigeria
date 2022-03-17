import React from 'react'
import  { enableScreens } from 'react-native-screens'
import { useFonts } from 'expo-font'

import AppNavigator from './navigation/AppNavigation'

enableScreens()

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
    <AppNavigator />
  )
}
