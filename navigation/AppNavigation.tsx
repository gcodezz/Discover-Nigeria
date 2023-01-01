import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import CultureDetailsScreen from '../screens/Culture/CultureDetailsScreen'
import CultureListScreen from '../screens/Culture/CultureListScreen'
import FoodDetailsScreen from '../screens/Food/FoodDetailsScreen'
import FoodListScreen, { screenOptions as FoodListScreenOptions } from '../screens/Food/FoodListScreen'
import PlaylistsScreen from '../screens/Music/PlaylistsScreen'
import ArtistsScreen from '../screens/Music/ArtistsScreen'
import YearsScreen from '../screens/Music/YearsScreen'
import PlacesList from '../screens/Places/PlacesList'
import PlaceDetails from '../screens/Places/PlaceDetails'
import FoodFavorite from '../screens/Favorite/FoodFavorite'
import PlaceFavorite from '../screens/Favorite/PlaceFavorite'
import DrawerContent from '../screens/General/DrawerContent'
import Icon from '../components/UI/Icon'
import {
  DrawerParams,
  FoodStackParams,
  CultureStackParams,
  MusicTabsParams,
  MusicStackParams,
  PlaceStackParams,
  FavoriteTabParams,
  FavStackParams
} from '../types/navigations'
import { MusicScreenStackProps } from '../types/props'
import TouchableCmp from '../components/UI/TouchableBtn'
import { RootState } from '../App'
import { CustomDarkTheme, CustomDefaultTheme } from '../themes/themes'

const Drawer = createDrawerNavigator<DrawerParams>()

const FoodStackNavigator = createStackNavigator<FoodStackParams>()

const FoodScreenStack = () => {
  return (
        <FoodStackNavigator.Navigator>
            <FoodStackNavigator.Screen
                name='Food'
                component={FoodListScreen}
                options={FoodListScreenOptions}
            />
            <FoodStackNavigator.Screen
                name='FoodDetails'
                component={FoodDetailsScreen}
            />
        </FoodStackNavigator.Navigator>
  )
}

const FavoriteTabs = createMaterialTopTabNavigator<FavoriteTabParams>()

const FavTabStack = () => {
  return (
        <FavoriteTabs.Navigator>
            <FavoriteTabs.Screen
                name='Foods'
                component={FoodFavorite}
            />
            <FavoriteTabs.Screen
                name='Places'
                component={PlaceFavorite}
            />
        </FavoriteTabs.Navigator>
  )
}

const FavStackNavigator = createStackNavigator<FavStackParams>()

const FavScreenStack = ({ navigation }: MusicScreenStackProps) => {
  return (
        <FavStackNavigator.Navigator>
            <FavStackNavigator.Screen
                name='FavoriteStack'
                component={FavTabStack}
                options={{
                  headerTitle: 'My Favorites',
                  headerLeft: () => (
                        <TouchableCmp
                            style={{ paddingLeft: 5 }}
                            onPress={() => navigation.toggleDrawer()}
                        >
                            <Icon iconName='menu' />
                        </TouchableCmp>
                  )
                }}
            />
            <FoodStackNavigator.Screen
                name='FoodDetails'
                component={FoodDetailsScreen}
            />
            <PlacesStackNavigator.Screen
                name='PlaceDetails'
                component={PlaceDetails}
            />
        </FavStackNavigator.Navigator>
  )
}

const CultureStackNavigator = createStackNavigator<CultureStackParams>()

const CultureScreenStack = () => {
  return (
        <CultureStackNavigator.Navigator>
            <CultureStackNavigator.Screen
                name='CultureList'
                component={CultureListScreen}
                options={{
                  headerTitle: 'Culture'
                }}
            />
            <CultureStackNavigator.Screen
                name='CultureDetails'
                component={CultureDetailsScreen}
            />
        </CultureStackNavigator.Navigator>
  )
}

const MusicTabs = createMaterialTopTabNavigator<MusicTabsParams>()

const MusicTabStack = () => {
  return (
        <MusicTabs.Navigator>
            <MusicTabs.Screen
                name='Playlist'
                component={PlaylistsScreen}
            />
            <MusicTabs.Screen
                name='Artists'
                component={ArtistsScreen}
            />
            <MusicTabs.Screen
                name='Year'
                component={YearsScreen}
            />
        </MusicTabs.Navigator>
  )
}

const MusicStackNavigator = createStackNavigator<MusicStackParams>()

const MusicScreenStack = ({ navigation }: MusicScreenStackProps) => {
  return (
        <MusicStackNavigator.Navigator
            screenOptions={{
              headerLeft: () => (
                    <TouchableCmp
                        style={{ paddingLeft: 5 }}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Icon iconName='menu' />
                    </TouchableCmp>
              )
            }}
        >
            <MusicStackNavigator.Screen
                name='Musics'
                component={MusicTabStack}
                options={{
                  headerTitle: 'Music'
                }}
            />
        </MusicStackNavigator.Navigator>
  )
}

const PlacesStackNavigator = createStackNavigator<PlaceStackParams>()

const PlacesScreenStack = () => {
  return (
        <PlacesStackNavigator.Navigator>
            <PlacesStackNavigator.Screen
                name='PlaceList'
                component={PlacesList}
                options={{
                  headerTitle: 'Places'
                }}
            />
            <PlacesStackNavigator.Screen
                name='PlaceDetails'
                component={PlaceDetails}
            />
        </PlacesStackNavigator.Navigator>
  )
}

const AppNavigator = () => {
  return (
        <Drawer.Navigator
            screenOptions={{
              headerShown: false,
              drawerActiveBackgroundColor: '#aa18ea',
              drawerActiveTintColor: '#fff',
              drawerLabelStyle: {
                fontSize: 18,
                marginLeft: -20,
                fontFamily: 'KarlaMedium'
              }
            }}
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name='Foods'
                component={FoodScreenStack}
                options={{
                  headerTitle: 'Food',
                  drawerIcon: () => (
                        <Icon iconName="bowl" />
                  )
                }}
            />
            <Drawer.Screen
                name='Culture'
                component={CultureScreenStack}
                options={{
                  headerTitle: 'Yoruba Culture',
                  drawerIcon: () => (
                        <Icon iconName="globe" />
                  )
                }}
            />
            <Drawer.Screen
                name='Music'
                component={MusicScreenStack}
                options={{
                  headerTitle: 'Music',
                  drawerIcon: () => (
                        <Icon iconName="music" />
                  )
                }}
            />
            <Drawer.Screen
                name='Places'
                component={PlacesScreenStack}
                options={{
                  headerTitle: 'Places',
                  drawerIcon: () => (
                        <Icon iconName="location" />
                  )
                }}
            />
            <Drawer.Screen
                name='Favorites'
                component={FavScreenStack}
                options={{
                  headerTitle: 'My Favorites',
                  drawerLabel: 'My Favorites',
                  drawerIcon: () => (
                        <Icon iconName="heart" />
                  )
                }}
            />
        </Drawer.Navigator>
  )
}

export default AppNavigator
