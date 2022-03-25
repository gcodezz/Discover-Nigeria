import React, { useMemo, useState } from 'react'
import  { enableScreens } from 'react-native-screens'
import { useFonts } from 'expo-font'
import { Provider as PaperProvider } from 'react-native-paper'

import AppNavigator from './navigation/AppNavigation'
import { Context } from './components/Context/Context'
import { CustomDarkTheme, CustomDefaultTheme } from './themes/themes'

enableScreens()

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
      <Context.Provider value={context}>
        <AppNavigator themeValue={theme}/>
      </Context.Provider>
    </PaperProvider>
  )
}
