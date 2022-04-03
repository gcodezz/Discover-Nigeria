import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import CultureDetailsScreen from '../screens/Culture/CultureDetailsScreen'
import CultureListScreen from '../screens/Culture/CultureListScreen'
import FoodDetailsScreen from '../screens/Food/FoodDetailsScreen'
import FoodListScreen, { screenOptions as FoodListScreenOptions } from '../screens/Food/FoodListScreen'
import PlaylistsScreen from '../screens/Music/PlaylistsScreen'
import ArtistsScreen from '../screens/Music/ArtistsScreen'
import YearsScreen from '../screens/Music/YearsScreen'
import DrawerContent from '../screens/General/DrawerContent'
import Icon from '../components/UI/Logo'
import { 
    DrawerParams, 
    FoodStackParams,
    CultureStackParams,
    MusicTabsParams,
    MusicStackParams
} from '../types/navigations'
import { MusicScreenStackProps } from '../types/props'

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
                    <TouchableOpacity 
                        style={{ paddingLeft: 5 }}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Icon iconName='menu' />
                    </TouchableOpacity>
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

const AppNavigator = (props: any) => {
    return (
        <NavigationContainer theme={props.themeValue}>
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
                        ),
                    }}
                />
                <Drawer.Screen 
                    name='Music'
                    component={MusicScreenStack}
                    options={{
                        headerTitle: 'Music',
                        drawerIcon: () => (
                            <Icon iconName="music" />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator