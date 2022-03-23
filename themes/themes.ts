import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    //   primary: 'rgb(255, 45, 85)',
    },
}

export const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
    //   primary: 'rgb(255, 45, 85)',
    },
}